class Question {
  constructor(data) {
  this.id = data.id
  this.animal_id = data.animal_id;
  Question.all.push(this);
}


  static createQuestion(){
      // const arr = []
    // while(arr.length < 4){
    //     var randomnumber = Math.floor(Math.random()*18) + 1;
    //     if(arr.indexOf(randomnumber) > -1) continue;
    //     arr[arr.length] = randomnumber;
    //   }
    //
    //   const arr2 = []
    //   while(arr2.length < 4){
    //       var random = Math.floor(Math.random()*4) + 1;
    //       if(arr.indexOf(random) > -1) continue;
    //       arr2[arr2.length] = random;
    //   }


   const all = Animal.all;
      // const randAnimal = all[((array[(array2[0])])]
      // const randAnimal1 = all[(array[(array2[1])]]
      // const randAnimal2 = all[(array[(array2[2])]]
      // const randAnimal3 = all[(array[(array2[3])]]
    const userBody = document.getElementById("user-div");
    const uniques = chance.unique(chance.natural, 4, {min: 0, max: 16});
    const uniq = chance.unique(chance.natural, 1, {min: 0, max: 3});
    console.log(uniq)
    userBody.innerHTML =
       `<div>
       <h2> ${all[uniques[uniq]].name} </h2>
       <br></br>
       <br></br>
       <a href="javascript:alert('This is a ${all[uniques[0]].name}!')">
     <img src= "${all[uniques[0]].image}" style="position:absolute;top:230px;right:300px;width:250px;height:250px;border:0">
       </a>
       <a href="javascript:alert('This is a ${all[uniques[1]].name}!')">
       <img src= "${all[uniques[1]].image}" style="position:absolute;bottom:50px;right:300px;width:250px;height:250px;border:0">
         </a>
         </a>
         <a href="javascript:alert('This is a ${all[uniques[2]].name}!')">
       <img src= "${all[uniques[2]].image}" style="position:absolute;top:230px;left:300px;width:250px;height:250px;border:0">
         </a>
         </a>
         <a href="javascript:alert('This is a ${all[uniques[3]].name}!')">
       <img src= "${all[uniques[3]].image}" style="position:absolute;bottom:50px;left:300px;width:250px;height:250px;border:0">
         </a>
     </div>`

   }
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
