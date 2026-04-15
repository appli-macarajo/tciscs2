import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
<<<<<<< HEAD

=======
 
>>>>>>> 362af08e2ad6faa1ac00b31807c823b6d42a6b69
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5095",
    },
  },
});