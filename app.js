
let userArray = [];
function register() {
    let name = document.getElementById("userName").value
    let gmail = document.getElementById("userGmail").value
    let userCount = userArray.filter((x) => {
        return x.objectGmail == gmail;
    });

    if(userCount.length == 0){
    let userDetails = { objectName: name, objectGmail:gmail};
    userArray.push(userDetails);
    }else{ 
        let error = document.getElementById("error")
        error.innerHTML = "This gmail is already existed"
       
    }
    console.log(userArray)
    let userContainer = document.getElementById("user-container")
    userContainer.innerHTML=''
    userArray.map((x)=>{
        let div = document.createElement("div")
        //userContainer.appendChild(div)
        let headingTwo = document.createElement('h2')
        let headingFour =  document.createElement('h4')
        div.classList.add('userdiv')
        headingTwo.innerHTML = x.objectName
        headingFour.innerHTML = x.objectGmail
        userContainer.appendChild(div)
        div.appendChild(headingTwo)
        div.appendChild(headingFour)
    });

    document.getElementById("userName").value=''
    document.getElementById("userGmail").value=''
    
}
