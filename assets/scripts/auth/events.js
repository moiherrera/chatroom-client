const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  // run handlebars files to display all of the profiles that have been created
  // sign in is successful
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onGoChangePassword = function (event) {
  event.preventDefault()
  ui.goChangePassword()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const addAuthHandlers = function () {
  $('.main-content').on('submit', '.sign-up', onSignUp)
  $('.main-content').on('submit', '.sign-in', onSignIn)
  $('.main-content').on('submit', '.change-password', onChangePassword)
  $('nav').on('submit', '.sign-out', onSignOut)
  $('nav').on('submit', '.show-change-password', onGoChangePassword)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onGoChangePassword,
  onChangePassword,
  addAuthHandlers
}
