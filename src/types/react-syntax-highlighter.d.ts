/**
 * react-syntax-highlighter does not ship with its own .d.ts file, and there is no official @types package.
 * so declaring  module manually
 * This file tells TypeScript: "Trust me, these modules exist."
 */

declare module "react-syntax-highlighter";
declare module "react-syntax-highlighter/dist/esm/styles/prism";
