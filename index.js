let customerId = 0
let mealId = 0
let deliveryId = 0
let employerId = 0
let store = {deliveries: [], customers: [], meals: [], employers: []}

class Customer{
  constructor(name, employer){
    this.name = name
    this.employer = employer.id
    this.id = ++customerId
    store.customers.push(this)
  }

  meals(){
    this.
  }

  deliveries(){

  }

  totalSpent(){

  }
}

class Meal(){
  constructor(title, price){
    this.title = title
    this.price = price
    this.id = ++mealId
    store.meals.push(this)
  }

  deliveries(){

  }

  customers(){

  }

  byPrice(){

  }
}

class Delivery(){
  constructor(meal, customer){
    this.meal = meal.id
    this.customer = customer.id
    this.id = ++deliveryId
    store.deliveries.push(this)
  }

  meal(){
    return store.meals.filter(eachMeal => {
      return eachMeal.id === this.meal
    })
  }

  customer(){

  }

}

class Employer{
  constructor(name){
    this.name = name
    this.id = ++employerId
  }

  employees(){
    return store.customers.filter(each => {
      return each.employer === this.id
    });
  }

  deliveries(){
    return this.employees().map(each => {
      return each.deliveries();
    });
  }

  meals(){

  }

  mealTotals(){

  }

}
