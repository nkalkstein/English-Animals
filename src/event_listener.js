USERNAME=""
class EventListener {

  static userListener() {
    const formContainer = document.getElementById("user-form");
      formContainer.addEventListener("submit", e => {
        e.preventDefault()
        const username = document.getElementById("name-input").value;
        USERNAME = username
      Adapter.createUser(username)
      document.getElementById("name-input").value = ""
      User.renderUserPage()
  })
}

  static quizListener() {
    const quizButton = document.getElementById("quiz-button");
        quizButton.addEventListener("click", e => {
          Quiz.generateQuiz()
    })
  }




  }
