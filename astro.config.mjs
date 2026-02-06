import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

// If you are not going to use vercel analytics you can delete the analytics
// If you want to remove vercel from your project you can do npm uninstall vercel
export default defineConfig({
  site: 'https://NievesPerez-Data.github.io',
  base: '/NievesPerez-Data',
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
