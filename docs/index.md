---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Docs, Foresure"
  text: "Trade on What's Next"
  tagline: "Decentralized Permissionless Prediction Markets on <span class=\"tag-blue\">BASE</span>"
  image:
    src: /logo.svg
    alt: Foresure Logo

  actions:
    - theme: brand
      text: White Paper
      link: /whitepaper/
    - theme: alt
      text: Get Started
      link: /getting-started/

features:
  - icon:
      src: /icons/zap.svg
      alt: Hybrid Consensus AMM
      width: 24
      height: 24
    title: Hybrid Consensus AMM
    details: Foresure's CAMM combines the best features of traditional AMMs with a hybrid liquidity model, allowing for efficient and secure trading of prediction markets. 
    link: /whitepaper/hybrid-camm-design
    linkText: View CAMM Design
  - icon:
      src: /icons/box.svg
      alt: Permissionless
      width: 24
      height: 24
    title: Truly Permissionless
    details: Turn anytihng to prediction market. No need for a trusted oracle, Foresure operates on-chain. Built for the Base Network with seamless Web3 integration.
    link: /getting-started/
    linkText: Get Started
  - icon:
      src: /icons/shield-check.svg
      alt: Optimistic Oracle
      width: 24
      height: 24
    title: Optimistic Oracle
    details: Foresure's Optimistic Oracle is a trust-minimized solution that allows users to submit predictions and resolve them with a decentralized oracle.
    link: /whitepaper/optimistic-oracle
    linkText: Learn More
---
