function createTeam(teamName,category){
    let tName=document.getElementById(teamName).value;
    let tcat=document.getElementById(category).value;
    let personSignedIn=localStorage.getItem("personSignedIn")
    console.log(tName,tcat,tMem)
    let getTeams=JSON.parse(localStorage.getItem("teams"))
    console.log(getTeams);

    let members= tMem.split(",")
 console.log(members);
 let newTem= new CreateTeam(tName,personSignedIn,members);
 getTeams.push(newTem);
 console.log(getTeams)
 localStorage.setItem("teams",JSON.stringify(getTeams));
 alert("Team Successfully created View Teams not done")

}


 