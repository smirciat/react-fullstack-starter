'use strict';
/*eslint no-process-env:0*/

import path from 'path';
import _ from 'lodash';
import locals from '../local.env.js';

/*function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}*/

// All configurations will extend these options
// ============================================
var tempDomain = process.env.DOMAIN || locals.DOMAIN;
var all = {
  domain: tempDomain ,
  env: process.env.NODE_ENV || locals.NODE_ENV,
  deployment: process.env.DEPLOYMENT_NAME || locals.DEPLOYMENT_NAME,
  // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

  // Browser-sync port
  browserSyncPort: process.env.BROWSER_SYNC_PORT || locals.BROWSER_SYNC_PORT || 3000,

  // Server port
  port: process.env.PORT || locals.PORT || 9000,

  // Server IP
  ip: process.env.IP || locals.IP || '0.0.0.0',

  // Should we populate the DB with sample data?
  seedDB: false,
  authorizationBaseUrl: `${tempDomain}/authorize`,
  //waypostAccountId: process.env.WAYPOST_ACCOUNT_ID.toLowerCase(),
  stripe: {
    clientId: process.env.STRIPE_CLIENT_ID || locals.STRIPE_CLIENT_ID,
    publicKey: process.env.STRIPE_PUBLIC_KEY || locals.STRIPE_PUBLIC_KEY,
    secret: process.env.STRIPE_SECRET || locals.STRIPE_SECRET,
    authorizationUrl: 'https://connect.stripe.com/oauth/authorize',
    tokenUrl: 'https://connect.stripe.com/oauth/token'
  },
  secrets: {
    session: process.env.SESSION_SECRET || locals.SESSION_SECRET,
    tokenEncryption: process.env.TOKEN_ENCRYPTION_SECRET || locals.TOKEN_ENCRYPTION_SECRET
  },
  aws: {
    region: process.env.AWS_REGION || locals.AWS_REGION || 'us-east-1',
    id: process.env.AWS_ACCESS_KEY || locals.AWS_ACCESS_KEY,
    secret: process.env.AWS_SECRET_ACCESS_KEY || locals.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.AWS_STORAGE_BUCKET || locals.AWS_STORAGE_BUCKET
  },
  email: {
    address: process.env.SYSTEM_EMAIL_ADDRESS || locals.SYSTEM_EMAIL_ADDRESS,
    name: process.env.SYSTEM_EMAIL_NAME || locals.SYSTEM_EMAIL_NAME,
    admin: process.env.ADMIN_EMAIL_ADDRESS || locals.ADMIN_EMAIL_ADDRESS
  },
  mailchimp: {
    secret: process.env.MAILCHIMP_SECRET || locals.MAILCHIMP_SECRET,
    listId: process.env.MAILCHIMP_LIST_ID || locals.MAILCHIMP_LIST_ID,
    region: process.env.MAILCHIMP_REGION || locals.MAILCHIMP_REGION
  },
  vault: {
    url: process.env.VAULT_URL || locals.VAULT_URL,
    secret: process.env.VAULT_SECRET || locals.VAULT_SECRET
  },
  mixpanel: {
    id: process.env.MIXPANEL_ID || locals.MIXPANEL_ID
  },
  sentry: {
    frontendDSN: process.env.SENTRY_DSN_FRONTEND || locals.SENTRY_DSN_FRONTEND,
    backendDSN: process.env.SENTRY_DSN_BACKEND || locals.SENTRY_DSN_BACKEND
  },
  plaid: {
    clientId: process.env.PLAID_CLIENT_ID || locals.PLAID_CLIENT_ID,
    publicKey: process.env.PLAID_PUBLIC_KEY || locals.PLAID_PUBLIC_KEY,
    secret: process.env.PLAID_SECRET || locals.PLAID_SECRET,
    env: process.env.PLAID_ENV || locals.PLAID_ENV
  },
  adminSettings: {
    notifyOnSignup: process.env.ADMIN_NOTIFY_SIGNUP === 'true' || process.env.ADMIN_NOTIFY_SIGNUP === true
  }
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./shared'),
  require(`./${process.env.NODE_ENV}-env.js`) || {});
