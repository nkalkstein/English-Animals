class Animal {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.image = data.image
    Animal.all.push(this);
  }

  static setAnimals(json) {
    json.forEach((animalObj)=> {
    const animal = new Animal(animalObj);
    // animal.render();
    })

  }
}

//   createDiv() {
//     return `<div id= "${this.name}" >
//               <h3 ${this.name}</h3>
//             </div>`;
// }
//
//   render() {
//     const userBody = document.getElementById("user-div");
//     userBody.innerHTML = += this.createDiv();
//   }


Animal.all = [];
