import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases } from "../../data";
import { CaseMotion } from "./CaseMotion";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) return {};
  return {
    title: `${item.name} — Primitive Archive`,
    description: item.desc,
  };
}

export default async function ObjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = cases.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return <CaseMotion item={item} />;
}
