import type { Metadata } from "next";
import { ArticleDraftEditor } from "@/components/admin/article-draft-editor";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Draft builder | ${siteConfig.name}`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <ArticleDraftEditor />;
}
