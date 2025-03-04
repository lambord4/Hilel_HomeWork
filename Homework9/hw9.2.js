/*
Дізнатись суму всіх зарплат користувачів:
Об'єкт може містити невідому кількість департаментів та співробітників
*/

let company = {
    sales: [{name:'John', salary: 1000}, {name:'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
}

function reversalSalarySumCalculator(obj) {
    let sum = 0
    for ( let key in obj ) {
        if (obj[key].length > 0) {
            for ( let i = 0; i < obj[key].length; i++) {
                sum += obj[key][i].salary
                
            } 
        }
        else {
            sum += reversalSalarySumCalculator(obj[key])
        }
    }
    return sum
}

document.write(`Sum of all employee salaries is ${reversalSalarySumCalculator(company)}`)
