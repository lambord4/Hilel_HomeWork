class House {
   constructor (apartmentAmount, peopleInApartmentAmount) {
    this.apartmentAmount = apartmentAmount;
    this.peopleInApartmentAmount = peopleInApartmentAmount;
   }
   getInfo () {
    console.log(`Your house has ${this.apartmentAmount} apartments and each apartment has ${this.peopleInApartmentAmount} peopel in it`)
   }
  }