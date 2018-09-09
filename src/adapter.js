class Adapter {


  static getAnimals(){
    return fetch("http://localhost:3000/api/v1/animals")
      .then(resp => resp.json())
  }


  static getUsers(){
    return fetch("http://localhost:3000/api/v1/users")
      .then(resp => resp.json())
  }

  static createUser(name){
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: `${name}`
      })
  }).then(resp => resp.json()).then(json => new User(json))
}

static createQuiz(user_id){
  fetch("http://localhost:3000/api/v1/quiz", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
    user_id: `${user_id}`
    })
}).then(resp => resp.json()).then(json => new Quiz(json))
}

}
