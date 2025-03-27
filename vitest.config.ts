/** @format */

import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";

export default defineConfig({
  test: {
    reporters: process.env.GITHUB_ACTIONS
      ? ["junit", "default", "github-actions"]
      : ["junit", "default"],
    // reporters: process.env.GITHUB_ACTIONS ? ["dot", "github-actions"] : ["dot"],
  },
});
