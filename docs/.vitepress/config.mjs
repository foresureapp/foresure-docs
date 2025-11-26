import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";



const resourcesSidebar = [
  {
    text: "Resources",
    items: [
      {
        text: "🛠️ Developer Resources",
        collapsed: false,
        items: [
          { text: "📝 Contract Addresses", link: "/developer-resources/contract-addresses" },
          { text: "💻 SDK Reference", link: "/developer-resources/sdk-reference" },
          { text: "📊 Subgraph & Analytics", link: "/developer-resources/subgraph" },
          { text: "🔮 Integration Oracle", link: "/developer-resources/integration-oracle" },
        ]
      },
      {
        text: "🏛️ Governance",
        collapsed: true,
        items: [
          { text: "📜 Overview", link: "/governance/" },
        ]
      },
      {
        text: "🛡️ Security",
        collapsed: true,
        items: [
          { text: "⚠️ Risk Disclosures", link: "/security/risks" },
          { text: "🕵️ Audit Reports", link: "/security/audit-reports" },
          { text: "🐛 Bug Bounty", link: "/security/bug-bounty" },
          { text: "🔌 Failure Modes", link: "/security/failure-modes" },
        ]
      },
      {
        text: "⚖️ Legal",
        collapsed: true,
        items: [
          { text: "📜 Terms of Service", link: "/legal/terms" },
          { text: "🔒 Privacy Policy", link: "/legal/privacy" },
        ]
      },
      {
        text: "🎨 Brand Assets",
        collapsed: true,
        items: [
          { text: "🖌️ Logos & Colors", link: "/resources/brand-assets" },
        ]
      }
    ]
  }
];

export default withMermaid(
  defineConfig({
    // ... other config
    appearance: 'dark',
    // Site metadata
    title: "FORESURE",
    description: "Docs site for foresure",
    base: "/",
    lang: "en-US",
    lastUpdated: false,

    // Sitemap generation
    sitemap: {
      hostname: 'https://docs.foresure.market'
    },

    vite: {
      logLevel: "error",
    },
    head: [
      // Google Analytics (GA4)
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }
      ],
      [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');`
      ],

      // SEO & Open Graph
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "og:locale", content: "en_US" }],
      ["meta", { property: "og:site_name", content: "Foresure Documentation" }],
      ["meta", { property: "og:title", content: "Foresure - Trade on What's Next" }],
      ["meta", { property: "og:description", content: "Decentralized Permissionless Prediction Markets on BASE. Read the whitepaper and developer guides." }],
      ["meta", { property: "og:image", content: "https://docs.foresure.market/og-preview.png" }],
      ["meta", { name: "twitter:card", content: "summary_large_image" }],
      ["meta", { name: "twitter:site", content: "@foresureapp" }],

      // Fonts & Icons
      ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
      [
        "link",
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      ],
      [
        "link",
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Azeret+Mono:ital,wght@0,100..900;1,100..900&family=Genos:ital,wght@0,100..900;1,100..900&family=SUSE:ital,wght@0,100..900;1,100..900&display=swap"
        },
      ],
      ["link", { rel: "icon", href: "/favicon.ico" }],
      ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
      ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" }],
      ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ],
    markdown: {
      mermaid: true,
      math: true,
      linkify: true,
    },
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
      themeVariables: {
        fontFamily: "SUSE, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",

        // Base Colors
        primaryColor: "#FFA101",
        primaryTextColor: "#FFA600", // Dark text on orange background
        primaryBorderColor: "#FFA101",
        lineColor: "#FFA101",

        // Secondary/Tertiary (for other nodes)
        secondaryColor: "#1E293B",
        tertiaryColor: "#0F172A",

        // Backgrounds
        background: "transparent",
        mainBkg: "#0F172A",

        // Text Colors (for dark mode visibility)
        textColor: "#FFA600", // White text for general labels
        titleColor: "#FFA101",

        // Specifics
        nodeBorder: "#FFA101",
        clusterBkg: "#FFA600",
        //edgeLabelBackground: "#0F172A",

        // Sequence Diagram Specifics
        actorTextColor: "#FFA101",
        signalTextColor: "#FFA600",

        nodeBorderRadius: "8",
      },
    },
    themeConfig: {
      search: {
        provider: 'local'
      },
      logo: {
        src: "/logo.svg", alt: "foresure", width: 24,
        height: 24
      },
      nav: [
        { text: "Get Started", link: "/getting-started/", activeMatch: "^/getting-started/" },
        {
          text: "Documentation",
          items: [
            { text: "Whitepaper", link: "/whitepaper/", activeMatch: "^/whitepaper/" },
            { text: "User Guide", link: "/guide/create", activeMatch: "^/guide/" },
            
            {
              text: "Resources",
              link: "/developer-resources/contract-addresses",
              activeMatch: "^/(developer-resources|governance|security|resources|legal)/"
            },
          ]
        }
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/foresureapp" },
        { icon: "x", link: "https://x.com/foresureapp" },
        { icon: "discord", link: "https://discord.gg/" },
        { icon: "telegram", link: "https://t.me/foresureapp" }
      ],

      // 3. SET UP MULTIPLE SIDEBARS
      sidebar: {
        "/getting-started/": [
          {
            text: "🚀 Get Started",
            items: [
              { text: "👋 Introduction", link: "/getting-started/" },
              { text: "🧠 Prediction Markets 101", link: "/getting-started/prediction-markets-101" },
              { text: "🆚 Foresure vs Others", link: "/getting-started/comparisons" },
              { text: "⚡ Quick Start", link: "/getting-started/quick-start" },
              { text: "👛 Supported Wallets", link: "/getting-started/supported-wallets" },
              { text: "🌐 Network Setup", link: "/getting-started/network-setup" },
              { text: "🗺️ Roadmap", link: "/getting-started/roadmap" },
              { text: "💰 Protocol Economics", link: "/getting-started/tokenomics" },
            ],
          },
        ],
        "/whitepaper/": [
          {
            text: '<img src="/icons/box.svg" class="sidebar-icon" /> Whitepaper',
            items: [
              { text: "👁️ Overview", link: "/whitepaper/" },
              { text: '📝 The Problem', link: "/whitepaper/problem" },
              { text: '⚖️ Hybrid CAMM Design', link: "/whitepaper/hybrid-camm-design" },
              { text: '⚖️ CAMM Math', link: "/whitepaper/camm-math" },
              { text: '📈 Dynamic Payouts', link: "/whitepaper/dynamic-payouts" },
              { text: '🔮 Optimistic Oracle', link: "/whitepaper/optimistic-oracle" },
              { text: '🤹 Multi-Outcome Model', link: "/whitepaper/multi-outcome-model" },
              { text: '🛡️ Security Model', link: "/whitepaper/security-model" },
            ],
          }
        ],
        "/guide/": [
          {
            text: "📘 User Guide",
            collapsible: true,
            items: [
              { text: "📈 Trading Guide", link: "/guide/trading" },
              { text: "💸 Managing Funds", link: "/guide/funds" },
              { text: "🛠️ Create Market", link: "/guide/create" },
              { text: "🎨 Creator Earnings", link: "/guide/creator-earnings" },
              { text: "💧 Add Liquidity", link: "/guide/add-liquidity" },
              { text: "⚖️ Dispute Resolution", link: "/guide/dispute" },
              { text: "✅ Market Resolution", link: "/guide/resolve" },
              { text: "🧑‍⚖️ Become a Juror", link: "/guide/become-jury" },
              { text: "🔧 Troubleshooting", link: "/guide/troubleshooting" },
              { text: "📞 Support", link: "/support" },
              { text: "❓ FAQ", link: "/faq" },
              { text: "📖 Glossary", link: "/glossary" },
            ],
          },
        ],
        "/advanced-concepts/": [
          {
            text: "🧠 Advanced Concepts",
            collapsible: true,
            items: [
              { text: "🧮 Dynamic Payout Math", link: "/advanced-concepts/dynamic-payout-math" },
              { text: "⚙️ Hybrid AMM Mechanics", link: "/advanced-concepts/hybrid-amm-mechanics" },
              { text: "🛡️ Griefing Protection", link: "/advanced-concepts/oracle-griefing-protection" },
              { text: "⛓️ On-Chain Settlement", link: "/advanced-concepts/on-chain-settlement" },
              { text: "💧 Liquidity Impact", link: "/advanced-concepts/liquidity-impact" },
            ],
          },
        ],
        "/developer-resources/": resourcesSidebar,
        "/governance/": resourcesSidebar,
        "/resources/": resourcesSidebar,
        "/legal/": resourcesSidebar,
        "/security/": resourcesSidebar,
      },
      footer: {
        message: "Everyone's got opinions on future events — we make them earnable.",
        copyright: "Released under the MIT License. Copyright © 2025 - Present FORESURE",
      },
    },
  }),
);
