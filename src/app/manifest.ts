import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description:
      "Independent guides for marketplace account restrictions, verification and payment holds.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#090c11",
    theme_color: "#090c11",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32",
        type: "image/x-icon",
      },
    ],
  };
}
