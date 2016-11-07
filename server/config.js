const getEnv = (name, defaultValue) => {
  const res = process.env[name]
  if (res === undefined) {
    return defaultValue
  }
  return res
}

let config = {
  port: getEnv('MINSKYTRAIN_PORT', 8000),
  host: getEnv('MINSKYTRAIN_HOST', 'localhost'),
  oauth: {
    clientID: getEnv('MINSKYTRAIN_OAUTH_ID'),
    clientSecret: getEnv('MINSKYTRAIN_OAUTH_SECRET'),
    authorizationURL: getEnv('MINSKYTRAIN_OAUTH_BASEURL') + '/oauth/authorize/',
    tokenURL: getEnv('MINSKYTRAIN_OAUTH_BASEURL') + '/oauth/token/',
    profileURL: getEnv('MINSKYTRAIN_OAUTH_BASEURL') + '/api/me/',
  },
  secret: getEnv('MINSKYTRAIN_SECRET'),
  submitURL: getEnv('MINSKYTRAIN_SUBMIT_BASEURL') + '/odovzdavanie/ajax/externy_submit/',
  submitTokens: {
    A: getEnv('MINSKYTRAIN_SUBMIT_TOKEN_A'),
    B: getEnv('MINSKYTRAIN_SUBMIT_TOKEN_B'),
  },
  tutorialURL: getEnv('MINSKYTRAIN_TUTORIAL_URL')
}

config.baseUrl = getEnv('MINSKYTRAIN_BASEURL', `http://${config.host}:${config.port}`)

export default config
