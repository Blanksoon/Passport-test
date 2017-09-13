module.exports = {
  debug: true,
  mongoUri: 'mongodb://localhost/my-project',
  sessionSecret: 'dev_secret_key',
  facebook: {
    clientID: '465947110436740',
    clientSecret: 'ffc1f6a6fa37a59ff75445bb8f507107',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  }
};