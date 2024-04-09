### Running Tests

To run tests, execute the following command:

```bash
yarn run cy:run
```
to make them pass put a proper API key in package.json cy:run script in --env token='putTokenHere'

### Report
pre-prepared mochaawesome report is in mochaawesome-report dir, to generate new report after test run use
```bash
npx mochawesome-report-generator mochawesome-report/mochawesome.json
```