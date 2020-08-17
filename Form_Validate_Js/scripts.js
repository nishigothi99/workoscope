

// SELECTING ALL TEXT ELEMENTS
var username = document.forms['vform']['username'];
var lname = document.forms['vform']['lname'];
var dob = document.forms['vform']['dob'];
var gender = document.forms['vform']['gender'];
var email = document.forms['vform']['email'];
var phone = document.forms['vform']['phone'];
var add = document.forms['vform']['add'];
var skill = document.forms['vform']['skill'];
var city = document.forms['vform']['city'];
var state = document.forms['vform']['state'];
var country = document.forms['vform']['country'];

// SELECTING ALL ERROR DISPLAY ELEMENTS
var name_error = document.getElementById('name_error');
var lname_error = document.getElementById('lname_error');
var dob_error = document.getElementById('dob_error');
var email_error = document.getElementById('email_error');
var gender_error = document.getElementById('gender_error');
var phone_error = document.getElementById('phone_error');
var add_error = document.getElementById('add_error');
var skill_error = document.getElementById('skill_error');
var city_error = document.getElementById('city_error');
var state_error = document.getElementById('state_error');
var country_error = document.getElementById('country_error');

// SETTING ALL EVENT LISTENERS
username.addEventListener('blur', nameVerify, true);
lname.addEventListener('blur', lnameVerify, true);
email.addEventListener('blur', emailVerify, true);
dob.addEventListener('blur', dobVerify, true);
phone.addEventListener('blur', phoneVerify, true);
// gender.addEventListener('blur', genderVerify, true);
add.addEventListener('blur', addVerify, true);
city.addEventListener('blur', cityVerify, true);
state.addEventListener('blur', stateVerify, true);
country.addEventListener('blur', countryVerify, true);
// skill.addEventListener('blur', skillVerify, true);
// gender.addEventListener('blur', genderVerify, true);
// validation function
function Validate() {
  
  // validate username
  if ((username.value == "") || (username.value.match( /^[a-zA-Z\-]+$/)== null) || (username.value.length < 3)) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username invalid";
    username.focus();
    return false;
  }

  if ((lname.value == "") || (lname.value.match( /^[a-zA-Z\-]+$/)== null) || (lname.value.length < 3)) {
    lname.style.border = "1px solid red";
    document.getElementById('lname_div').style.color = "red";
    lname_error.textContent = "Lastname invalid";
    lname.focus();
    return false;
  }

  if(dob.value == "") {
    dob.style.border = "1px solid red";
    document.getElementById('dob_div').style.color = "red";
    dob_error.textContent = "DOB invalid";
    dob.focus();
    return false;
  }
  
  if ((email.value == "") || (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)==null)){
    email.style.border = "1px solid red";
    // console.log(!(gender[0].checked || gender[1].checked))
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }

  if (!(gender[0].checked || gender[1].checked)) {
    // gender.style.border = "1px solid red";
    document.getElementById('gender_div').style.color = "red";
    gender_error.textContent = "Gender is required";
    // gender.focus();
    return false;
  }

  if ((phone.value == "") || (phone.value.match( /^\d{10}$/)== null) || (phone.value.length != 10)) {
  phone.style.border = "1px solid red";
  document.getElementById('phone_div').style.color = "red";
  phone_error.textContent = "Phone Number is invalid";
  phone.focus();
  return false;
  }

  if (add.value == "") {
    add.style.border = "1px solid red";
    document.getElementById('add_div').style.color = "red";
    add_error.textContent = "Address is required";
    // console.log(skill.checked.length < 3)
    add.focus();
    return false;
  }    
  var a = document.querySelectorAll('input[type="checkbox"]:checked').length
  if (a < 3) {
    // add.style.border = "1px solid red";
    document.getElementById('skill_div').style.color = "red";
    skill_error.textContent = "Minimum 3 Skills are required";
    // skill.focus();
    return false;
  }   

  if (city.value == "") {
  city.style.border = "1px solid red";
  // console.log(!(gender[0].checked || gender[1].checked))
  document.getElementById('city_div').style.color = "red";
  city_error.textContent = "City is required";
  city.focus();
  return false;
  } 

  if (state.value == "") {
  state.style.border = "1px solid red";
  // console.log(!(gender[0].checked || gender[1].checked))
  document.getElementById('state_div').style.color = "red";
  state_error.textContent = "State is required";
  state.focus();
  return false;
  } 

  if (country.value == "") {
  country.style.border = "1px solid red";
  // console.log(!(gender[0].checked || gender[1].checked))
  document.getElementById('country_div').style.color = "red";
  country_error.textContent = "Country is required";
  country.focus();
  return false;
  }
}
// event handler functions
function nameVerify() {
  if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function lnameVerify() {
  if (lname.value != "") {
   lname.style.border = "1px solid #5e6e66";
   document.getElementById('lname_div').style.color = "#5e6e66";
   lname_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if (email.value != "") {
    email.style.border = "1px solid #5e6e66";
    document.getElementById('email_div').style.color = "#5e6e66";
    email_error.innerHTML = "";
    return true;
  }
}
function dobVerify() {
  if (dob.value != "") {
    dob.style.border = "1px solid #5e6e66";
    document.getElementById('dob_div').style.color = "#5e6e66";
    dob_error.innerHTML = "";
    return true;
  }
}
function genderVerify() {
  if (gender[0].checked || gender[1].checked) {
    // gender.style.border = "1px solid #5e6e66";
    document.getElementById('gender_div').style.color = "#5e6e66";
    gender_error.innerHTML = "";
    return true;
  }
}
function phoneVerify() {
  if (phone.value != "") {
    phone.style.border = "1px solid #5e6e66";
    document.getElementById('phone_div').style.color = "#5e6e66";
    phone_error.innerHTML = "";
    return true;
  }
}

function addVerify() {
  if (add.value != "") {
    add.style.border = "1px solid #5e6e66";
    document.getElementById('add_div').style.color = "#5e6e66";
    add_error.innerHTML = "";
    return true;
  }
}

function cityVerify() {
  if (city.value != "") {
    city.style.border = "1px solid #5e6e66";
    document.getElementById('city_div').style.color = "#5e6e66";
    city_error.innerHTML = "";
    return true;
  }
}

function stateVerify() {
  if (state.value != "") {
    state.style.border = "1px solid #5e6e66";
    document.getElementById('state_div').style.color = "#5e6e66";
    state_error.innerHTML = "";
    return true;
  }
}

function countryVerify() {
  if (country.value != "") {
    country.style.border = "1px solid #5e6e66";
    document.getElementById('country_div').style.color = "#5e6e66";
    country_error.innerHTML = "";
    return true;
  }
}

function skillVerify() {
  if (skill.value != "") {
    skill.style.border = "1px solid #5e6e66";
    document.getElementById('skill_div').style.color = "#5e6e66";
    skill_error.innerHTML = "";
    return true;
  }
}

