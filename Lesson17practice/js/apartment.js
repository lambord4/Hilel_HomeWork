class Apartment {
  constructor(number, roomsAmount, people) {
    this.number = number;
    this.roomsAmount = roomsAmount;
    this.people = Apartment.generateSet(people);
  }

  static generateSet(people) {
    const peopleSet = new Set();
    people.forEach(p => peopleSet.add(p));
    return peopleSet;
  }

  getInfo() {
    console.log(`Number: ${this.number}, Rooms: ${this.roomsAmount}`);
    this.people.forEach(p => p.getInfo());
  }
}
