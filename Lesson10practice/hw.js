const usersOrders = orders.reduce ((acc, order) => {
    acc[order.user] = (acc[order.user] || 0) + order.items.length;
    return acc;
}, {});
console.log(usersOrders); //Task 1 method Reduce

        
const usersOrdersMap = new Map();

for (let i = 0; i < orders.length; i ++) {
    if (usersOrdersMap.has(orders[i].user)) {
        usersOrdersMap.set(orders[i].user, (usersOrdersMap.get(orders[i].user) + orders[i].items.length))
    } else {
        usersOrdersMap.set(orders[i].user, orders[i].items.length);
    }
}
console.log(usersOrdersMap);  //Task 1 method Map


const sumOfPurchasesOfUsers = orders
    .map(order => [order.user, order.items.reduce((sum, item) => sum + item.price, 0)])
    .reduce((acc, [user, price]) => {
        acc[user] = (acc[user] || 0) + price;
        return acc;
    }, {});

console.log(sumOfPurchasesOfUsers) //Task 2 metod Map+Reduce

const sumOfPurchasesOfUsersMap = new Map();

for (let i = 0; i < orders.length; i ++) {
    for (let j = 0; j < orders[i].items.length; j++) {
        if (sumOfPurchasesOfUsersMap.has(orders[i].user)) {
            sumOfPurchasesOfUsersMap.set(orders[i].user, (sumOfPurchasesOfUsersMap.get(orders[i].user) + orders[i].items[j].price))
        } else {
            sumOfPurchasesOfUsersMap.set(orders[i].user, orders[i].items[j].price);
        }
    }
}

console.log(sumOfPurchasesOfUsersMap); //Task 2 method Map

const uniqItems = new Set();
for (let i = 0; i < orders.length; i ++) {
    for (let j = 0; j < orders[i].items.length; j++) {
        uniqItems.add(orders[i].items[j].name)
    }
}

console.log(uniqItems) //Task 3 method Set

const biggestSpender = Object.entries(sumOfPurchasesOfUsers).reduce(
    (max, [user, spent]) => (spent > max[1] ? [user, spent] : max),
    ["", 0]
);

console.log(`${biggestSpender[0]} spent the most: $${biggestSpender[1]}`) //Task 4 biggest Spender

