class User {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    User.all.push(this);
  }


  static setUsers(json) {
    json.forEach((userObj)=> {
    const user = new User(userObj);
  })
}

  static renderUserForm() {
    const userBody = document.getElementById("user-div");
    userBody.innerHTML = `<form id="user-form" action="index.html" method="post">
              Enter your name:<br>
           <input id="name-input" placeholder="Enter Name" type="text" name="" value="">
           <input type="submit" name="" value="Submit">
           </form>`
  }

  static renderUserPage(){
    const userBody = document.getElementById("user-div");
    userBody.innerHTML =
    `<h2> Welcome ${USERNAME}!
    <br></br>
    <button id="quiz-button" class="button" >Create an Animal Quiz</button>
    </h2>`
   EventListener.quizListener();
  }

}

User.all = [];
