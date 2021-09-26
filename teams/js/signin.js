
function CreateTeam(name, leader, members){
this.name=name;
this.leader = leader;
this.members = members
}
let teams=[];

function signIn(email,Password) {
    
    let signemail= document.getElementById(email).value.toLowerCase();
    let signpswd= document.getElementById(Password).value;
  let details = JSON.parse(localStorage.getItem(signemail));

if(details.email===signemail && details.password===signpswd){
   
    document.getElementById("signinForm").action="./../homepage.html"
    localStorage.setItem("personSignedIn",details.name);    
}

}



