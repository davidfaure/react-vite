import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";

// to prevent default behaviour with node > 17, that use 127.0.0.1 instead of localhost
// 127.0.0.1 is causing a 403 on imgur so had to change to localhost

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [react()],
});
