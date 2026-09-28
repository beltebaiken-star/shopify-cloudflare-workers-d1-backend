# Cloudflare Workers + D1 Shopify Backend

> Upwork portfolio demo / sanitized technical case study.

## Client problem

A serverless backend case study demonstrating API repair, access control, data persistence, rollback planning and production-readiness checks.

## What this repository demonstrates

- Workers API routing
- D1 schema and query patterns
- Access-control checks
- Failure handling and rollback
- Production QA checklist

## Tech stack

Cloudflare Workers, D1, REST APIs, Shopify integration, access control

## Architecture

This repository is intentionally structured as a public portfolio implementation rather than a copy of private client code. Production credentials, customer data, private URLs and proprietary business logic are excluded.

```text
Input / Store / Platform Event
        ↓
Validation & Normalization
        ↓
Business / Tracking / Integration Logic
        ↓
External API or Storefront
        ↓
QA, Logs, Reconciliation
```

## What an Upwork client can verify here

- Clear separation between configuration, business logic and external API calls
- Error handling and production-readiness thinking
- Practical ecommerce use cases rather than toy examples
- Documentation that explains both implementation and validation
- Security-conscious handling of credentials and customer data

## Suggested demo contents

- `src/` — sanitized implementation examples
- `examples/` — sample payloads using synthetic data
- `tests/` — validation / QA examples
- `docs/architecture.md` — architecture and flow
- `docs/qa-checklist.md` — production verification steps
- `screenshots/` — portfolio diagrams and UI/results images

## Source portfolio reference

Internal source project: **27 - Cloudflare Workers D1 + Shopify Course Delivery Backend Repair**

Only reusable patterns and sanitized demo material should be published publicly.

## Hiring fit

Good match for Upwork projects involving **Cloudflare Workers + D1 Shopify Backend**, Shopify troubleshooting, ecommerce integrations, tracking reliability, API automation, or production-readiness reviews.