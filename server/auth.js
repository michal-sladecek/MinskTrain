import passport from 'passport'
import request from 'request'
import OAuth2Strategy from 'passport-oauth2'

import * as urls from '../common/urls'
import config from './config'

export default (app) => {

  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new OAuth2Strategy(
    {
      ...config.oauth,
      callbackURL: config.baseUrl + urls.loginCallback
    },
    function(accessToken, refreshToken, profile, done) {
      request({
        url: config.oauth.profileURL,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ContentType: 'application/json',
        }
      }, (error, response, body) => {
        const data = JSON.parse(body)
        console.log('Logged in', data)
        done(null, data)
      })
    }
  ))

  passport.serializeUser((user, done) => {
    done(null, user);
  })

  passport.deserializeUser((obj, done) => {
    done(null, obj);
  })

  app.get(
    urls.login,
    passport.authenticate('oauth2')
  )

  app.get(
    urls.loginCallback,
    passport.authenticate(
      'oauth2', {failureRedirect: urls.login}),
      function(req, res) {
        res.redirect('/');
      }
  )

  app.get(
    urls.logout,
    (req, res) => {
      req.logout()
      res.redirect('/')
    }
  )
}
