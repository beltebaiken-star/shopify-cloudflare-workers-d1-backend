# QA Checklist

- [ ] request authentication is enforced
- [ ] authorization is checked per resource
- [ ] D1 queries use parameters
- [ ] invalid states return clear errors
- [ ] retries do not duplicate writes
- [ ] rollback path is documented
- [ ] production secrets are kept outside source
- [ ] endpoint behavior is tested with synthetic data
