class Teacher {

constructor(name, initials) {
  this.name = name;
  this.initials = initials;
  this.department = department;
  this.img = img;
}

getMail(){
  let mail = `${this.initials}@eaaa.dk`;
  return mail;
}

}

let teacher1 = new Teacher ("Birgitte", "bki", "Mulitimediedesign", "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg");
console.log(teacher1);
teacher1.department = "Web Development";
console.log(teacher1.getMail());
