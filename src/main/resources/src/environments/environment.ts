// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  authUri: 'http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/auth',
  tokenUri: 'http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/token',
  logoutUri: "http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/logout",
  redirectUri: 'http://localhost:8089/',
  homeUri: 'http://localhost:8089',
  resourceServerUri: 'http://localhost:8081/resource-server/api/foos'
};
