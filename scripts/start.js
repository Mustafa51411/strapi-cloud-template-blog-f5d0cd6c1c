'use strict';

process.env.API_TOKEN = process.env.API_TOKEN || process.env.CLOUD_CRONJOB_API_TOKEN || 'disabled';
process.env.API_URL =
  process.env.API_URL ||
  process.env.CLOUD_CRONJOB_API_URL ||
  process.env.STRAPI_ADMIN_BACKEND_URL ||
  'https://hopeful-duck-1d6f1130fb.strapiapp.com';
process.env.FIRST_RUN_WINDOW = process.env.FIRST_RUN_WINDOW || process.env.CLOUD_CRONJOB_FIRST_RUN_WINDOW || '1';

require('@strapi/strapi/bin/strapi');
