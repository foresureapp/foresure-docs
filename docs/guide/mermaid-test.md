# Mermaid Test

```mermaid
sequenceDiagram
  participant U as User
  participant S as Server
  participant DB as Database

  U->>S: Request page
  S->>DB: Fetch data
  DB-->>S: Data
  S-->>U: Rendered HTML + Mermaid
```

```mermaid
flowchart LR
  A[Start] --> B{Auth?}
  B -- Yes --> C[Dashboard]
  B -- No --> D[Login]
  C --> E[View Markets]
  E --> F[Trade]
```

## Math Test

Inline math: $e^{i\pi} + 1 = 0$.

Display math:

$$
\nabla \cdot \vec{\mathbf{B}} = 0 \quad \text{and} \quad
\nabla \times \vec{\mathbf{E}} + \frac{1}{c} \frac{\partial \vec{\mathbf{B}}}{\partial t} = 0
$$