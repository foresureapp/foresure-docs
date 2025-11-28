import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";



const resourcesSidebar = [
  {
    text: "Resources",
    items: [
      {
        text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-logo-dev.svg\')"></span> Developer Resources',
        collapsed: false,
        items: [
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-article.svg\')"></span> Contract Addresses', link: "/developer-resources/contract-addresses" },
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-logo-dev.svg\')"></span> SDK Reference', link: "/developer-resources/sdk-reference" },
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-hub.svg\')"></span> Subgraph & Analytics', link: "/developer-resources/subgraph" },
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-lightbulb.svg\')"></span> Integration Oracle', link: "/developer-resources/integration-oracle" },
        ]
      },
      {
        text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-account-balance-wallet.svg\')"></span> Governance',
        collapsed: true,
        items: [
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-menu-book.svg\')"></span> Overview', link: "/governance/" },
        ]
      },
      {
        text: '<span class="sidebar-icon" style="--icon: url(\'/icons/shield-check.svg\')"></span> Security',
        collapsed: true,
        items: [
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-gpp-good.svg\')"></span> Risk Disclosures', link: "/security/risks" },
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-find-in-page.svg\')"></span> Audit Reports', link: "/security/audit-reports" },
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/bug.svg\')"></span> Bug Bounty', link: "/security/bug-bounty" },
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-bolt.svg\')"></span> Failure Modes', link: "/security/failure-modes" },
        ]
      },
      {
        text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-gpp-good.svg\')"></span> Legal',
        collapsed: true,
        items: [
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-menu-book.svg\')"></span> Terms of Service', link: "/legal/terms" },
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/shield-check.svg\')"></span> Privacy Policy', link: "/legal/privacy" },
        ]
      },
      {
        text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-brush.svg\')"></span> Brand Assets',
        collapsed: true,
        items: [
          { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-brush.svg\')"></span> Logos & Colors', link: "/resources/brand-assets" },
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
    lastUpdated: true,
    ignoreDeadLinks: true,
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
        },
        { text: "Foresure", link: "https://foresure.app" }
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
            text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-moving.svg\')"></span> Get Started',
            items: [
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-article.svg\')"></span> Introduction', link: "/getting-started/" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-lightbulb.svg\')"></span> Prediction Markets 101', link: "/getting-started/prediction-markets-101" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ph--arrows-clockwise-duotone.svg\')"></span> Foresure vs Others', link: "/getting-started/comparisons" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/zap.svg\')"></span> Quick Start', link: "/getting-started/quick-start" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-account-balance-wallet.svg\')"></span> Supported Wallets', link: "/getting-started/supported-wallets" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-hub.svg\')"></span> Network Setup', link: "/getting-started/network-setup" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-moving.svg\')"></span> Roadmap', link: "/getting-started/roadmap" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-monetization-on.svg\')"></span> Protocol Economics', link: "/getting-started/tokenomics" },
            ],
          },
        ],
        "/whitepaper/": [
          {
            text: '<span class="sidebar-icon" style="--icon: url(\'/icons/box.svg\')"></span> Whitepaper',
            items: [
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-article.svg\')"></span> Overview', link: "/whitepaper/" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-article.svg\')"></span> The Problem', link: "/whitepaper/problem" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-gpp-good.svg\')"></span> Hybrid CAMM Design', link: "/whitepaper/hybrid-camm-design" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/functions.svg\')"></span> CAMM Math', link: "/whitepaper/camm-math" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-monetization-on.svg\')"></span> Dynamic Payouts', link: "/whitepaper/dynamic-payouts" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-lightbulb.svg\')"></span> Optimistic Oracle', link: "/whitepaper/optimistic-oracle" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-filter-vintage.svg\')"></span> Multi-Outcome Model', link: "/whitepaper/multi-outcome-model" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/shield-check.svg\')"></span> Security Model', link: "/whitepaper/security-model" },
            ],
          }
        ],
        "/guide/": [
          {
            text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-menu-book.svg\')"></span> User Guide',
            collapsible: true,
            items: [
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-monetization-on.svg\')"></span> Trading Guide', link: "/guide/trading" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-monetization-on.svg\')"></span> Managing Funds', link: "/guide/funds" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-add-task.svg\')"></span> Create Market', link: "/guide/create" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-brush.svg\')"></span> Creator Earnings', link: "/guide/creator-earnings" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-local-cafe.svg\')"></span> Add Liquidity', link: "/guide/add-liquidity" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-gpp-good.svg\')"></span> Dispute Resolution', link: "/guide/dispute" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-check-circle.svg\')"></span> Market Resolution', link: "/guide/resolve" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-local-police.svg\')"></span> Become a Juror', link: "/guide/become-jury" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-add-task.svg\')"></span> Troubleshooting', link: "/guide/troubleshooting" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-chat.svg\')"></span> Support', link: "/support" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-chat.svg\')"></span> FAQ', link: "/faq" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-menu-book.svg\')"></span> Glossary', link: "/glossary" },
            ],
          },
        ],
        "/advanced-concepts/": [
          {
            text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-lightbulb.svg\')"></span> Advanced Concepts',
            collapsible: true,
            items: [
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/functions.svg\')"></span> Dynamic Payout Math', link: "/advanced-concepts/dynamic-payout-math" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-hub.svg\')"></span> Hybrid AMM Mechanics', link: "/advanced-concepts/hybrid-amm-mechanics" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/shield-check.svg\')"></span> Griefing Protection', link: "/advanced-concepts/oracle-griefing-protection" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-hub.svg\')"></span> On-Chain Settlement', link: "/advanced-concepts/on-chain-settlement" },
              { text: '<span class="sidebar-icon" style="--icon: url(\'/icons/ic--baseline-local-cafe.svg\')"></span> Liquidity Impact', link: "/advanced-concepts/liquidity-impact" },
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
