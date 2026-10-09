// @ts-check
import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [markdoc()],
  site: "https://keninette.github.io",
  base: process.env.NODE_ENV === "development" ? "/" : "/dame-eugenie",
});
