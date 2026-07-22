import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Animated GLSL shader background rendered with raw three.js.
 *
 * This mirrors the shader effect from the react-three-fiber "paper shaders"
 * component, but renders imperatively so it does NOT globally augment JSX
 * (which conflicts with MUI's typing). Same effect, no type pollution.
 */

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    // Slow, low-frequency flow for a smooth matte gradient
    float noise = sin(uv.x * 3.0 + time * 0.3) * cos(uv.y * 3.0 + time * 0.25);
    noise += sin(uv.x * 6.0 - time * 0.4) * cos(uv.y * 5.0 + time * 0.35) * 0.5;

    float t = noise * 0.5 + 0.5;
    vec3 color = mix(color1, color2, t);

    // Very faint highlight along the flow ridges
    color = mix(color, vec3(1.0), pow(abs(noise), 3.0) * 0.08);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function ShaderBackground({
  color1,
  color2,
}: {
  color1: string;
  color2: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const uniforms = {
      time: { value: 0 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId = 0;
    const clock = new THREE.Clock();
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animate = () => {
      uniforms.time.value = prefersReduced ? 0 : clock.getElapsedTime();
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [color1, color2]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
