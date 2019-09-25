var form = document.querySelector('#login_form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('form submitted');
}, false);

var submit_form_btn = document.querySelector('#submit_form');

submit_form_btn.addEventListener('click', function () {
  console.log("eii")
  if (form.checkValidity()) {
    form.submit();
  }
  else {
    console.log('not valid')
  }
}, false);