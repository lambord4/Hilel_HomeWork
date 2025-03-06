const user = {
    name: 'Gleb',
    surname: `Stepanov`,
    age: `30`,
    location: `Ukraine`,
    showInfo () {
        return `Name = ${this.name} <br> Surname = ${this.surname} <br> Age = ${this.age} 
        <br> Location = ${this.location}`
    }
}

document.write(user.showInfo())