export const environment = {
  production: true,

  authUri: 'https://oauth-authorization-server-bruno-stuessi-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/auth/realms/baeldung/protocol/openid-connect/auth',
  tokenUri: 'https://oauth-authorization-server-bruno-stuessi-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/auth/realms/baeldung/protocol/openid-connect/token',
  logoutUri: "https://oauth-authorization-server-bruno-stuessi-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/auth/realms/baeldung/protocol/openid-connect/logout",
  redirectUri: 'https://oauth-angular-client-bruno-stuessi-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/',
  homeUri: 'https://oauth-angular-client-bruno-stuessi-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com',
  resourceServerUri: 'https://oauth-resource-server-bruno-stuessi-dev.apps.sandbox-m4.g2pi.p1.openshiftapps.com/resource-server/api/foos'
};
