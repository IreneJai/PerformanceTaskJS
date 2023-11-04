const scriptURL = 'https://script.google.com/macros/s/AKfycbzoMA94B0s1lxs_T_99T1uVXrR0S2TzkhJc53UAOrM6F4Yl-3pmWg0RZ0oufntu95__Pg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(() =>{window.location.reload();})
    .catch(error => console.error('Error!', erorr.message))
})