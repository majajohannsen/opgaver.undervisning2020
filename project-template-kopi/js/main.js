class Teacher {

constructor(name, initials) {
  this.name = name;
  this.initials = initials;
  this.department = department;
  this.img = img;
  this.age = age;
}

getMail(){
  return `${this.initials}@eaaa.dk`;
}

log(){
let template = `
Name: ${this.name}
Initials: ${this.initials}
Mail: ${this.getMail()}
Department: ${this.department}
Image Url: ${this.img}
`;
}

sayHi (){
    alert(`Hi ${this.name}`);
  }

  append(containerId){
    let tempale = /*html*/`
    <article>
      <h2> ${this.name}</h2>
      <p><a href ="mailto:${this.getMail()}">${this.getMail()}</a></p>
  </article>
      `;
      document.querySelector(`#${containerId}`).innerHTML += template;
  }
}


let teacher1 = new Teacher ("Birgitte", "bki", "Mulitimediedesign", "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg", "65 years old");
console.log(teacher1);
teacher1.department = "Web Development";
console.log(teacher1.getMail());

let teacher2 = new Teacher ("Rasmus", "race", "Mulitimediedesign", "https://cederdorff.com/img/rasmus.jpg", "30 years old");
console.log(teacher2);
teacher2.department = "Web Development";
console.log(teacher2.getMail());

let teacher3 = new Teacher ("Martin", "race", "Mulitimediedesign", "https://cederdorff.com/img/rasmus.jpg", "30 years old");
console.log(teacher3);
teacher3.department = "Web Development";
console.log(teacher3.getMail());


console.log(teacher1)
console.log()
