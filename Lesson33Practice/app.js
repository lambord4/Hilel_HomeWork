class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    meow() {
      return `${this.name} говорит "мяу"`;
    }
  }
  
export default Cat;