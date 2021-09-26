function CreatePerson(pname,pemail,ppass) {
    this.name=pname;
    this.email=pemail;
    this.password=ppass;
}



function signUp(name,email,password) {
  
  let user = new CreatePerson(document.getElementById(name).value,document.getElementById(email).value.toLowerCase(),document.getElementById(password).value)
  localStorage.setItem(user.email,JSON.stringify(user));
  document.getElementById("signupForm").action="./../signIn.html"
}
