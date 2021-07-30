//heading
const heading = document.createElement("div");
heading.className = "heading";
heading.innerHTML="HERE YOU CAN SEE RANDOM DOG IMAGES"
document.body.append(heading);


//to creat card in UI
function loadUsers(users) {
    let user=users;
    console.log("load"+user)
    var carbagecheck = document.getElementsByClassName('user-list');
    if (carbagecheck.length > 0) {
        document.querySelector(".user-list").remove();
      }
        const userList = document.createElement("div");
        userList.className = "user-list";
               console.log(users);
               const userContainer = document.createElement("div");
               userContainer.className = "user-container";
               userContainer.innerHTML= `
                      <div class="card-heading">CUTE DOG IMAGES</div>
                      <div class="card-image">
                      <img class="image" src=${user.message} alt="CLICK BUTTON"\>
                      </div>
                      <div class="card-content">
                       CLICK RANDOM DOG BUTTON TO <br> CHANGE IMAGE 
                      </div>
                      <div>
                      <button class="btn" onclick=getUser()>RANDOM DOG IMAGE</button>
                      </div>
                      ` 
          userList.append(userContainer);
      document.body.append(userList);
  }


//FUNCTION TO GET DOG IMAGES
async function getUser(){
    const data =await fetch(`https://dog.ceo/api/breeds/image/random`,
    {
        method:"GET"
    }
    );
    try{
        const users=await data.json();
        loadUsers(users);
       }
    catch(err){
        const userList = document.createElement("div");
        userList.className = "user-list";
        userList.innerHTML=`CHECK NETWORK`
        document.body.append(userList);
    }
}


//TO LOAD FIRST IMAGE
getUser();
