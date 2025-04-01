let student1 = new Student("Елена", "Кукушкина", 2004, [95, 91, 94, 97]);
let student2 = new Student("Марина", "Павлинова", 2003, [88, 85, 83, 90]);
let student3 = new Student("Егор", "Петушков", 2002, [60, 70, 65, 68]);

for (let i = 0; i < 22; i++) student1.present(); // почти все занятия
for (let i = 0; i < 20; i++) student2.present(); // неплохое посещение
for (let i = 0; i < 10; i++) student3.absent();  // почти не ходит

// Выводим summary
console.log(student1.name + " Ворраст: " + student1.age() + "; " + student1.summary()); // Молодець!
console.log(student2.name + " Ворраст: " + student2.age() + "; " + student2.summary()); // Добре, але можна краще
console.log(student3.name + " Ворраст: " + student3.age() + "; " + student3.summary()); // Редиска!
