# Technical Architecture

## Core Technology Stack

Foresure is built as a **Server-Side Rendered (SSR)** application to ensure performance, SEO, and a simple mental model.

*   **Frontend**: [HTMX](https://htmx.org/) + [AlpineJS](https://alpinejs.dev/) + [Tailwind CSS v4](https://tailwindcss.com/)
    *   *Why?* Reduced bundle size, better initial load, and simpler state management compared to React.
*   **Backend**: [Fastify](https://www.fastify.io/)
    *   *Why?* Superior performance, built-in schema validation, and excellent TypeScript support.
*   **Database**: [PostgreSQL](https://www.postgresql.org/) + [Drizzle ORM](https://orm.drizzle.team/)
    *   *Why?* ACID compliance for financial data and type-safety.
*   **Blockchain**: [Base Network](https://base.org/) (EVM) + [ethers.js](https://docs.ethers.org/)
    *   *Why?* Low fees, fast block times (2s), and EVM compatibility.

## System Diagram

The following diagram illustrates the high-level architecture of the platform:

```mermaid
graph TD
    A[User Browser] --> B[Fastify SSR Server]
    B --> C[HTML Templates Partials]
    B --> D[API Routes]
    D --> E[Drizzle ORM]
    E --> F[Postgre Database]
    D --> G[Web3 Service]
    G --> H[Base Network]
    G --> I[Privy Wallet]
    A --> J[HTMX + AlpineJS]
    J --> K[Tailwind CSS v4]

    subgraph "Frontend Layer"
        C
        J
        K
    end

    subgraph "Backend Layer"
        B
        D
        G
    end

    subgraph "Data Layer"
        E
        F
    end

    subgraph "Blockchain Layer"
        H
        I
    end
```

## Server Architecture

Requests are handled by Fastify, which routes them either to the Template Engine (for HTML pages) or the API Controller (for JSON data).


```mermaid
 graph TD
    A[Client Request] --> B[Fastify Router]
    B --> C{Request Type}
    C -->|SSR| D[Template Engine]
    C -->|API| E[API Controller]
    C -->|Static| F[Static Assets]

    D --> G[html template Renderer]
    E --> H[Service Layer]

    H --> I[Market Service]
    H --> J[Trading Service]
    H --> K[Liquidity Service]
    H --> L[Web3 Service]

    I --> M[Database Layer]
    J --> M
    K --> M
    L --> N[Blockchain Layer]

    M --> O[Drizzle ORM]
    O --> P[PostgreSQL]

    N --> Q[Base Network]
    N --> R[Contract Interactions]
```
