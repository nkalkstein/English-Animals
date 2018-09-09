USERNAME=""
FAVFOOD=""
class EventListener {

  static userListener() {
    const formContainer = document.getElementById("user-form");
      formContainer.addEventListener("submit", e => {
        e.preventDefault()
        // const username = document.getElementById("name-input").value;
        // USERNAME = username
          const firstName = document.getElementById("first-name-input").value;
          const lastName = document.getElementById("last-name-input").value;
          const favFood = document.getElementById("favorite-food").value;
          const username = `${firstName} ${lastName}`
          USERNAME = username
          FAVFOOD = favFood
      // Adapter.createUser(username)
      document.getElementById("first-name-input").value = ""
      document.getElementById("first-name-input").value = ""
      User.renderUserPage(username)
  })
}

  static quizListener() {
      const foodButton = document.getElementById("food-button");
        foodButton.addEventListener("click", e => {
          User.renderFood()
    // const quizButton = document.getElementById("quiz-button");
    //     quizButton.addEventListener("click", e => {
    //       Quiz.generateQuiz()
    })
  }

  static titleListener(){
    const title = document.getElementById("title");
      title.addEventListener("submit", e=> {
        e.preventDefault()
        User.renderUserPage();

      })
  }

  static rightListener() {
    const rightAnimal = document.getElementById("animal");
    const animal0 = document.getElementById("0");
    const animal1 = document.getElementById("1");
    const animal2 = document.getElementById("2");
    const animal3 = document.getElementById("3");
      console.log(rightAnimal.innerText)
      console.log(animal0.href)
      console.log(animal1.alt)
      console.log(animal2.alt)
      console.log(animal3.alt)
          if (rightAnimal.innerText === animal0.name) {
            animal0.addEventListener("click", e => {
             console.log(correct)
          })}
        if (animal1 === rightAnimal){
          console.log(correct)
          animal1.addEventListener("click", e => {
            Question.renderCorrect(animal1.id)
          })}
        if (animal2.id === rightAnimal.id){
          console.log(correct)
           animal2.addEventListener("click", e => {
             Question.renderCorrect(animal2.id)
          })}
        if (animal3.id === rightAnimal.id){
          console.log(correct)
         animal3.addEventListener("click", e => {
            Question.renderCorrect(animal3.id)
          })}
        }

  }
