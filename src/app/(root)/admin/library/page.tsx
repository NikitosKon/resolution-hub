import type { Metadata } from "next";
import { ArticleLibrary } from "@/components/admin/article-library";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Article library | ${siteConfig.name}`,
  robots: { index: false, follow: false },
};

export default function ArticleLibraryPage() {
  return <ArticleLibrary />;
}
