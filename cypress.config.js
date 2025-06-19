const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.thepunterspage.com/free-bets/',
    defaultCommandTimeout: 60000,
  },
  chromeWebSecurity: false,
  failOnStatusCode: false,
})