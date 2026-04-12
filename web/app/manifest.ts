import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "MooMelody",
    short_name: "MooMelody",
    description: "milk tracking + calm/soothing vibe",
    lang: "en-US",
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    display: "standalone",
    background_color: "#f1f7f1",
    theme_color: "#255b7d",
    categories: ["productivity", "agriculture"],
    icons: [
      {
        src: "/img/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/img/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/img/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
