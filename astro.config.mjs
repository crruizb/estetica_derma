import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://esteticaderma.com",
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  })],
  vite: {
    optimizeDeps: {
      // NavMobile imports react-dom (createPortal) and hydrates lazily (client:visible).
      // Pre-bundling it avoids Vite's late re-optimization ("504 Outdated Optimize Dep")
      // that left the mobile menu without JavaScript in dev.
      include: ["react-dom"],
    },
  },
});
