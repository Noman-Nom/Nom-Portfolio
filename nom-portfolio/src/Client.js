import sanityClient, { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const Client = SanityClient({
  projectId: process.env.NOM_PORTFOLIO_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-10-17",
  useCdn: true,
  token: process.env.NOM_PORTFOLIO_PROJECT_TOKEN,
});

const builder = imageUrlBuilder(Client);

export const urlFor = (source) => builder.image(source);
