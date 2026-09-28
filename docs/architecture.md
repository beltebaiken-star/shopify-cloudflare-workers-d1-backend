# Architecture

```text
Shopify / client request
  -> Cloudflare Worker route
  -> authentication / access checks
  -> D1 query or mutation
  -> normalized API response
  -> logging / rollback / recovery path
```

This case study focuses on repairing a serverless delivery backend while keeping authorization and rollback safety explicit.
