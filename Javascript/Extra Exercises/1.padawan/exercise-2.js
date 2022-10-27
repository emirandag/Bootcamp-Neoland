const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const veganFood = []

for (const food of foodSchedule) {

    if (food.isVegan === false) {
 
        let fruit = fruits.pop()
        food.name = fruit
        food.isVegan = true
        veganFood.push(food)

    } else {
        veganFood.push(food)
    }
}

console.log(veganFood);
