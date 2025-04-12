class House {
   constructor (apartmentAmount, peopleInApartmentAmount) {
    this.apartmentAmount = apartmentAmount;
    this.peopleInApartmentAmount = peopleInApartmentAmount;
    this.apartments = new Map()
    }

    addApartment(number, rooms, people) {
        const apartment = new Apartment(number, rooms, people);
        this.apartments.set(number, apartment);
    }

  showAllApartments() {
    this.apartments.forEach((apt, number) => {
      console.log(`Apartment ${number}:`);
      apt.getInfo();
      });
    }

   getInfo () {
    console.log(`Your house has ${this.apartmentAmount} apartments and each apartment has ${this.peopleInApartmentAmount} people in it`)
   }
}