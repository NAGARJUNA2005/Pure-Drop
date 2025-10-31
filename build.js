// build.js
import { execSync } from "child_process";

try {
  console.log("Starting Vite build...");
  execSync("npx vite build", { stdio: "inherit" });
  console.log("Build completed successfully!");
} catch (error) {
  console.error("Build failed:", error.message);
  process.exit(1);
}
