import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
 
// });


export default defineConfig({
  plugins: [react()],
  base: "/Social-Media-Web-Application-React/",
})


// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0'
//   }
// })