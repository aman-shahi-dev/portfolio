export const homeBlogs = [
  {
    id: "blog-react-concurrency",
    title: "Understanding React 19 Concurrency",
    description:
      "A deep dive into how modern React handles background rendering and transitions.",
    content:
      "React 19 introduces several improvements to the way concurrent rendering works. By leveraging Transitions, you can keep your UI responsive even during heavy updates. This allows developers to prioritize user interactions like typing or clicking over slower background data fetching or complex list re-rendering.",
    datePublished: "27 Feb 2026",
    urlPath: "/react-concurrency",
  },
  {
    id: "blog-tailwind-tips",
    title: "Advanced Tailwind CSS Patterns",
    description:
      "Moving beyond basic utility classes to build scalable design systems.",
    content:
      "Tailwind is more than just inline styles. When used with a consistent design token approach, you can create themes that are easily swappable. We explore using the @theme directive in the latest versions to manage colors, spacing, and animations without bloating your configuration file.",
    datePublished: "27 Feb 2026",
    urlPath: "/tailwind-patterns",
  },
  {
    id: "blog-typescript-tricks",
    title: "TypeScript Utility Types You Should Know",
    description:
      "Level up your type safety with Omit, Pick, and Template Literal Types.",
    content:
      "TypeScript isn't just about adding :string to everything. Real power comes from using mapped types and conditional types. For instance, using Record<string, unknown> is much safer than using 'any' when you don't know the exact shape of an incoming API response but know it will be an object.",
    datePublished: "28 Feb 2026",
    urlPath: "/typescript-utility-types",
  },
];
