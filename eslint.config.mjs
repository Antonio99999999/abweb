import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["work/**", "outputs/**", ".next/**", "node_modules/**"],
  },
];

export default eslintConfig;
