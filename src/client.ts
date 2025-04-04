import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const getEnvVar = (key: string): string => {
  const value = import.meta.env[key as keyof ImportMetaEnv];
  if (!value) {
    console.log(`Missing environment variable: ${key}`);
  }
  return value;
};

export const client = createClient({
  projectId: getEnvVar("VITE_SANITY_PROJECT_ID"),
  dataset: "production",
  apiVersion: "2025-04-04",
  useCdn: true,
  token: getEnvVar("VITE_SANITY_TOKEN"),
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
