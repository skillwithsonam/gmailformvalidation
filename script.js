function validateForm() {
  let valid=true;
  clearErrors();
  let fname = document.register.firstName.value;
  let lname = document.register.lastName.value;
  let uname = document.register.userName.value;
  let pwd = document.register.password.value
  if (fname == "" || lname == "") {
    document.getElementById("firstName").style.border='1px solid red'
    document.getElementById("lastName").style.border='1px solid red'
    document.getElementById("errorname").innerHTML = "Enter First Name and surname";
    valid=false;
  }
  if (uname == ""){
    document.getElementById("userName").style.border='1px solid red'
    document.getElementById("erroruname").style.color='red'
    document.getElementById("erroruname").innerHTML = "Choose Gmail Address";
    valid=false;
  }
  if (uname!="" && uname.length < 6 || uname.length> 30){
    document.getElementById("userName").style.border='1px solid red'
    document.getElementById("erroruname").style.color='red'
    document.getElementById("erroruname").innerHTML = "Sorry, your username must be 6 and 30 Characters long.";
    valid=false;
  }
  if (pwd == ""){
    document.getElementById("password").style.border='1px solid red'
    document.getElementById("errorpwd").style.color='red'
    document.getElementById("errorpwd").innerHTML = "Enter a Password";
    valid=false;
  }
  if (pwd!="" && pwd.length<8){
    document.getElementById("password").style.border='1px solid red'
    document.getElementById("errorpwd").style.color='red'
    document.getElementById("errorpwd").innerHTML = "Use 8 characters or more for your Password";
    valid=false
  }
  return valid;
}
function clearErrors(){
  document.getElementById("firstName").style.border='1px solid grey'
  document.getElementById("lastName").style.border='1px solid grey'
  document.getElementById("userName").style.border='1px solid grey'
  document.getElementById("password").style.border='1px solid grey'
  document.getElementById("errorname").innerHTML="";
  document.getElementById("erroruname").style.color='grey'
  document.getElementById("errorpwd").style.color='grey'
  document.getElementById("erroruname").innerHTML = "You can use letters, numbers and fullstops";
  document.getElementById("errorpwd").innerHTML = "Use 8 or more Characters with mix of letters, numbers & symbols";
}