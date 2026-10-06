import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export function RelatedGuides({ slugs }: { slugs: string[] }) {
  const posts = slugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post));
  if (posts.length === 0) return null;
  return (
    <section className="section shell" aria-labelledby="related-guides-title">
      <p className="eyebrow">APPROFONDISCI</p>
      <h2 id="related-guides-title">Guide collegate</h2>
      <ul style={{ display: "grid", gap: 18, marginTop: 24, padding: 0, listStyle: "none" }}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link className="text-link" href={`/blog/${post.slug}`}>{post.title} <span aria-hidden>→</span></Link>
            <p style={{ margin: "6px 0 0", color: "#5f6c7d", lineHeight: 1.6 }}>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
