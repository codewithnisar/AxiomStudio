/**
 * StackAura — Project Case Studies Data Registry
 */
window.PROJECTS_DATA = {
  orbitos: {
    tag: "SaaS / Product Design",
    title: "OrbitOS Workspace",
    previewBg: "radial-gradient(circle at 70% 30%, var(--lime) 0 7%, transparent 8%), linear-gradient(135deg, #161821 0 52%, var(--blue) 52%)",
    tech: ["React", "TypeScript", "Node.js", "Canvas API", "TailwindCSS"],
    body: `
      <p>OrbitOS is an enterprise SaaS platform engineered for multi-disciplinary teams managing complex digital workflows. By converting tabular operations into a fluid spatial canvas, team collaboration becomes intuitive and real-time.</p>
      <h4 style="color:var(--ink); margin: 20px 0 8px; font-family:'Space Grotesk';">Key Features & Architecture:</h4>
      <ul>
        <li><strong>Spatial Workspace:</strong> Drag-and-drop infinite canvas with zero-latency position sync.</li>
        <li><strong>Command Palette:</strong> Keyboard-driven workflows for speed power-users.</li>
        <li><strong>Custom Analytics:</strong> Embedded visual data feeds powered by WebGL hardware acceleration.</li>
      </ul>
      <p><em>Metrics: Achieved 99.8% customer satisfaction score and reduced project onboarding time by 45%.</em></p>
    `
  },
  forma: {
    tag: "E-Commerce / Digital Storefront",
    title: "Forma Editorial Commerce",
    previewBg: "linear-gradient(135deg, #e9b6a7, #f6e7d8)",
    tech: ["Next.js", "Shopify Storefront API", "WebGL", "GraphQL", "Vanilla CSS"],
    body: `
      <p>Forma redefines modern retail by merging luxury print editorial aesthetic with high-conversion e-commerce technology. Designed with bold typography and seamless transaction flows.</p>
      <h4 style="color:var(--ink); margin: 20px 0 8px; font-family:'Space Grotesk';">Key Features & Architecture:</h4>
      <ul>
        <li><strong>Headless Storefront:</strong> Lightning-fast page loads under 800ms using server-side edge caching.</li>
        <li><strong>Dynamic Lookbooks:</strong> Interactive hotspot image galleries linked directly to mini-carts.</li>
        <li><strong>Fluid Checkout:</strong> One-tap checkout integration reducing shopping cart abandonment.</li>
      </ul>
      <p><em>Metrics: Boosted conversion rates by 34% within the first 60 days of release.</em></p>
    `
  },
  neuraldesk: {
    tag: "AI / Web Application",
    title: "Neural Desk Workspace",
    previewBg: "linear-gradient(135deg, #11131b, #6c7284)",
    tech: ["Python", "FastAPI", "LangChain", "React", "WebSockets"],
    body: `
      <p>Neural Desk is an AI-native desktop and web workspace built for modern engineering teams. It coordinates asynchronous AI agents to draft code, automate doc updates, and analyze telemetry.</p>
      <h4 style="color:var(--ink); margin: 20px 0 8px; font-family:'Space Grotesk';">Key Features & Architecture:</h4>
      <ul>
        <li><strong>Streamed LLM Responses:</strong> Low-latency streaming interface using persistent WebSockets.</li>
        <li><strong>Context Aware Memory:</strong> Local vector index that grounds LLM suggestions in user codebase context.</li>
        <li><strong>Autonomous Agent Workflows:</strong> Multi-step reasoning pipelines for complex tasks.</li>
      </ul>
      <p><em>Metrics: Saved developers an average of 12 hours per week on routine documentation and code reviews.</em></p>
    `
  }
};
