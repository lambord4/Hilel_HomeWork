// const myPerson = new Person ( 'Oleg' , 18);
// const myPerson2 = new Person ( 'Valya', 23)
// const myApartment = new Apartment (666, 4, [myPerson, myPerson2]);


// console.log(myApartment.getInfo())


document.querySelector('.btn').addEventListener('click', () => {
    const apartmentAmount = parseInt(prompt(`Enter amount of apartments in your house`));
    const peopleInApartmentAmount = parseInt(prompt(`Enter amount of people in apartment`));
    if (isNaN(apartmentAmount) || isNaN(peopleInApartmentAmount)) {
        alert('Please enter valid numbers');
        return;
      }
    const myHouse = new House (apartmentAmount, peopleInApartmentAmount);
    myHouse.getInfo()
    document.body.innerHTML += `
    Your house has ${myHouse.apartmentAmount} apartments and each 
    apartment has ${myHouse.peopleInApartmentAmount} people in it`
})