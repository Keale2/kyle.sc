function loaded () {
  var emailEl = document.querySelector(`.email-input`)
  var passwordEl = document.querySelector(`.password-input`)
  var loginEl = document.querySelector(`.login-button`)

  loginEl.addEventListener(`click`, function () {
    alert(`H@CKED!!! Email: ${emailEl.value} Password: ${passwordEl.value}`)
  })
}

if (document.readyState !== `loading`) {
  loaded()
}