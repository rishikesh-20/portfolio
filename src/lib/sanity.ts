import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const dataset = process.env.REACT_APP_SANITY_DATASET || 'production';

// Until the Sanity project is configured, the blog renders an empty state
// instead of crashing the whole page.
export const isSanityConfigured = Boolean(projectId);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: projectId as string,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: any) {
  return builder ? builder.image(source) : null;
}

export interface Post {
  _id: string;
  title: string;
  publishedAt: string;
  blurb?: string;
  coverImage?: any;
  body?: any;
}

// Published posts only. Drafts live under a `drafts.` id prefix and are excluded.
export const POSTS_QUERY = `*[_type == "post" && !(_id in path("drafts.**"))]
  | order(publishedAt desc){ _id, title, publishedAt, blurb, coverImage, body }`;
