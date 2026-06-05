module.exports = ({ env }) => ({
  'cloud-cronjob-runner': {
    enabled: false,
    config: {
      apiToken: env('CLOUD_CRONJOB_API_TOKEN', 'disabled'),
      apiUrl: env('CLOUD_CRONJOB_API_URL', 'https://example.com'),
      firstRunWindow: env.int('CLOUD_CRONJOB_FIRST_RUN_WINDOW', 1),
    },
  },
});
