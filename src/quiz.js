class Quiz {
  constructor(data) {
    this.id = data.id
    this.animal_id = data.animal_id;
    Quiz.all.push(this);

}

 static generateQuiz(user_id) {
   // var times = 10;
   //    for(var i=0; i < times; i++){
    Question.createQuestion();

  }

}



Quiz.all = [];
