import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Creates a minimal production server for the final Docker stage.
  output: "standalone",
};

export default nextConfig;
