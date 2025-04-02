import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti@^1 we can import .ts files :)
await jiti.import("./lib/env.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
}

export default nextConfig