// ── DATA ─────────────────────────────────────────────────────────────────────

export const PERSON = {
  name: "Kalyani Patil",
  roles: ["Senior Staff Engineer", "Tech Lead", "Full-Stack Architect"],
  email: "kalyanipatil1294@gmail.com",
  location: "San Jose, CA",
  github: "https://github.com/Kalyanipatil1294",          // ✅ updated
  linkedin: "https://www.linkedin.com/in/kalyani1294/",
  photo: "https://avatars.githubusercontent.com/u/27810097?v=4",  // ✅ photo added
  summary:
    "Senior Staff Software Engineer & Tech Lead with 8+ years architecting full-stack enterprise platforms. Specialist in designing and scaling end-to-end systems with a patent-pending innovation — transforming complex real-time telemetry into pixel-perfect interfaces that balance security with world-class UX.",
};

export const EXPERIENCE = [
  {
    company: "Palo Alto Networks",
    role: "Senior Staff Software Engineer",
    tenure: "July 2022 – Present",
    location: "Santa Clara, US",
    color: "#6EE7B7",
    highlights: [
      "Tech Lead for a high-density enterprise AIOps platform monitoring global NGFW and Cloud Device health & security insights.",
      "Engineered high-performance full-stack dashboards with custom visual hierarchies and synchronized metric plotting, turning raw telemetry into actionable security scores.",
      "Directed development of high-complexity authoring tools, establishing cross-stack design standards for ML-powered predictive analytics.",
      "Spearheaded technical roadmaps, mentored engineers, and holds a patent-pending alert testing strategy.",
    ],
  },
  {
    company: "DeepIntent, Inc",
    role: "Software Engineer II",
    tenure: "Apr 2019 – Feb 2021",
    location: "Pune, India",
    color: "#93C5FD",
    highlights: [
      "Architected a high-scale full-stack interface using React.js and GraphQL connecting advertisers and publishers at low latency.",
      "Founded an enterprise-grade React component library — analogous to Material UI — adopted across multiple engineering teams.",
      "Designed and managed CI/CD pipelines via GitLab, automating testing and deployment for high-availability production environments.",
    ],
  },
  {
    company: "Bonzai Digital",
    role: "Software Engineer",
    tenure: "Mar 2018 – Mar 2019",
    location: "Pune, India",
    color: "#C4B5FD",
    highlights: [
      "Owned end-to-end development of a React/Node.js ad tag validation app, increasing engineering throughput by 30%.",
      "Directed a team building a centralized real-time dashboard for advertisement monitoring.",
      "Built a Spring Boot geo-redundant ad delivery system bridging frontend visibility and backend reliability.",
    ],
  },
  {
    company: "Cybage Software",
    role: "Software Engineer",
    tenure: "Nov 2016 – Mar 2018",
    location: "Pune, India",
    color: "#FCA5A5",
    highlights: [
      "Developed large-scale web applications using AngularJS and JavaScript to meet client technical requirements.",
    ],
  },
];

export const PROJECTS = [
  { title: "Security Platform", icon: "🛡️", accent: "#6EE7B7", description: "Enterprise platform for monitoring global NGFW & Cloud Device health with real-time security scoring for mission-critical infrastructure.", tags: ["React", "TypeScript", "Node.js", "Microservices"] },
  { title: "Enterprise Component Library", icon: "🧩", accent: "#93C5FD", description: "Founded and scaled an org-wide React design system analogous to Material UI, adopted across multiple engineering teams at DeepIntent.", tags: ["React", "TypeScript", "Storybook"] },
  { title: "Ad Tag Validation Service", icon: "✅", accent: "#C4B5FD", description: "Full-stack React/Node.js validation app that directly increased engineering team throughput by 30% by eliminating manual QA bottlenecks.", tags: ["React", "Node.js", "AWS Lambda", "DynamoDB"] },
  { title: "Geo-Redundant Ad Delivery", icon: "🌍", accent: "#FCD34D", description: "High-availability Spring Boot system supporting geo-redundant ad delivery infrastructure across distributed regions.", tags: ["Java", "Spring Boot", "AWS", "SQS"] },
  { title: "Advertisement Designing Platform", icon: "🎨", accent: "#FCA5A5", description: "A Programmatic Creative Management Platform enabling advertisers, agencies and publishers to build personalised digital advertising at scale. Platform to create, design , manage creatives.", tags: ["React", "GraphQL", "Node.js"] },
  { title: "Text Recognition & Conversion To The Speech", icon: "🔊", accent: "#6EE7B7", description: "The system extracts the text region present in the image , the text file is created after recognition of all the characters further the content of the text file is read (Speech).The system aims at using strong and robust algorithms to achieve exact text recognition", tags: ["OpenCV", 'Java'] },
];

export const TECH = [
  { label: "Frontend",     color: "#6EE7B7", items: ["React.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "AngularJS"] },
  { label: "Backend",      color: "#93C5FD", items: ["Node.js", "Java", "Spring Boot", "GraphQL", "REST APIs", "Microservices"] },
  { label: "Cloud & Data", color: "#C4B5FD", items: ["AWS", "DynamoDB", "PostgreSQL", "MongoDB", "SQS", "Distributed Systems"] },
  { label: "Tools",        color: "#FCD34D", items: ["CI/CD", "GitLab", "Git", "Webpack", "Babel", "Postman"] },
  { label: "AI Tools",     color: "#FCA5A5", items: ["Cursor", "GitHub Copilot", "Claude", "Windsurf"] },
];


// ── THEME ─────────────────────────────────────────────────────────────────────

export const C = {
  surface: "#0A0D14",
  card:    "#10141F",
  border:  "#1A2035",
  accent:  "#6EE7B7",
  muted:   "#6B7A99",
  text:    "#E8EDF5",
  dim:     "#C4CBD8",
};

export const inner = {
  width: "100%",
  maxWidth: 1160,
  margin: "0 auto",
  padding: "0 48px",
};

export const fadeUp = (inView, delay = 0) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? "translateY(0)" : "translateY(24px)",
  transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
});