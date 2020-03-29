/*eslint no-process-env:0*/

import locals from '../local.env.js';
// Development specific configuration
// ==================================
module.exports = {
  redis: {
    uri: 'redis://localhost:6379'
  },
  forceHttps: false,
  // Postgres connection options
  sequelize: {
    uri: process.env.DATABASE_URL || locals.DATABASE_URL || 'postgres://',
    dialect: 'postgres',
    logging: false,
    storage: 'dev.postgres',
    define: {
      timestamps: true
    }
  },
  // Seed database on startup
  seedDB: false

};
