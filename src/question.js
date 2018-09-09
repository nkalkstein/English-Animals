class Question {
  constructor(data) {
  this.id = data.id
  this.animal_id = data.animal_id;
  Question.all.push(this);
}


  static createQuestion(){



   const all = Animal.all;
      // const randAnimal = all[((array[(array2[0])])]
      // const randAnimal1 = all[(array[(array2[1])]]
      // const randAnimal2 = all[(array[(array2[2])]]
      // const randAnimal3 = all[(array[(array2[3])]]
    const userBody = document.getElementById("user-div");
    const uniques = chance.unique(chance.natural, 4, {min: 0, max: 24});
    const uniq = chance.unique(chance.natural, 1, {min: 0, max: 3});
    userBody.innerHTML =
       `<div>
       <h2 id="animal" alt="${all[uniques[uniq]].name}"> ${all[uniques[uniq]].name} </h2>
       <h3>Click the Correct Animal</h3>
       <br></br>
       <br></br>
       <a href="javascript:alert('This is a ${all[uniques[0]].name}!')" id="0" alt="${all[uniques[0]].name}">
     <img src= "${all[uniques[0]].image}" style="position:absolute;top:230px;right:300px;width:250px;height:250px;border:0">
       </a>
       <a href="javascript:alert('This is a ${all[uniques[1]].name}!')" id="1" alt="${all[uniques[1]].name}">
       <img src= "${all[uniques[1]].image}" style="position:absolute;bottom:50px;right:300px;width:250px;height:250px;border:0">
         </a>
         </a>
         <a href="javascript:alert('This is a ${all[uniques[2]].name}!')" id="2" alt="${all[uniques[2]].name}">
       <img src= "${all[uniques[2]].image}" style="position:absolute;top:230px;left:300px;width:250px;height:250px;border:0">
         </a>
         </a>
         <a href="javascript:alert('This is a ${all[uniques[3]].name}!')" id="3" alt="${all[uniques[3]].name}">
       <img src= "${all[uniques[3]].image}" style="position:absolute;bottom:50px;left:300px;width:250px;height:250px;border:0">
         </a>
         <h2>
         <button id="quiz-button" class="button" style = float:right;> NEXT </button>
         </h2>
        </div>`
        EventListener.quizListener();
        EventListener.rightListener();

   }

   // static renderCorrect(animalId){
   //   const chosenAnimal = document.getElementById(`${animalId}`);
   //   chosenAnimal.href = "javascript:alert('yeah')"
   // }
}

  // static renderImages() {
  //     let animalId1 = Math.floor(Math.random()*18) + 1
  //     let all = Animal.all
  //     let randAnimal1 = all[animalId1]
  //     const userBody = document.getElementById("user-div");
  //       userBody.innerHTML =`
  //     <img src= "${randAnimal1.image}" alt="${randAnimal1}" style="position:absolute;bottom:300px;right:300px;width:250px;height:250px;border:0">
  //   </a>





Question.all = [];
