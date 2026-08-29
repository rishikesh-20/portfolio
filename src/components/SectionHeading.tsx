import React from "react";

interface Props {
  top: string;
  bottom: string;
}

// Both words stay inside one heading so screen readers announce the full phrase.
function SectionHeading({ top, bottom }: Props) {
  return (
    <h1 className="section-heading">
      <span className="display-line">{top}</span>
      <span className="display-line display-ghost">{bottom}</span>
    </h1>
  );
}

export default SectionHeading;
