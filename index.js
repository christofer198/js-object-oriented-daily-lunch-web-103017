let customerId = 0
let mealId = 0
let deliveryId = 0
let employerId = 0
let store = {deliveries: []}

class Customer{
  constructor(name, employer){
    this.name = name
    this.employer = employer
    this.id = ++customerId
  }
}

class Meal(){
  constructor(title, price){
    this.title = title
    this.price = price
    this.id = ++mealId
  }
}

class Delivery(){
  constructor(meal, customer){
    this.meal = meal
    this.customer = customer
    this.id = ++deliveryId
    store.deliveries.push(this)
  }
}

class Employer{
  constructor(name){
    this.id = ++employerId
  }
}
