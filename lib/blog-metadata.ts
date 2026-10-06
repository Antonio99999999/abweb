import type { Metadata } from "next";
import { AUTHOR } from "@/lib/author";

export function articleMetadata({ slug, title, description, ogDescription, published = "2026-10-06" }: {
  slug: string; title: string; description: string; ogDescription: string; published?: string;
}): Metadata {
  const canonical = `https://www.abagenziaweb.it/blog/${slug}`;
  const ogTitle = `${title} | AB Web Agency`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      locale: "it_IT",
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      publishedTime: `${published}T09:00:00+02:00`,
      authors: [AUTHOR.name],
      images: [{ url: `${canonical}/opengraph-image`, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [`${canonical}/opengraph-image`],
    },
  };
}
