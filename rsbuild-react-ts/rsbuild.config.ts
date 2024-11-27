import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [pluginReact()],
});