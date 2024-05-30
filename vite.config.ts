import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const { command } = env;
  return {
    define: {
      isDev: command === "serve",
    },
    plugins: [react()],
  };
});
