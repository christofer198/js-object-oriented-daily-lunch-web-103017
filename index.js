let customerId = 0
let mealId = 0
let deliveryId = 0
let employerId = 0
let store = { deliveries: [], employers: [], customers: [], meals: [] };
//
class Customer{
  constructor(name, employer = {}){
    this.name = name
    this.employer = employer.id
    this.id = ++customerId
    store.customers.push(this)
  }

  meals(){
    return store.deliveries.filter(each => {
      if(each.customer === this.customer){
        each.meal()
      }
    });
  }

  deliveries(){

  }

  totalSpent(){
    let price = []
    this.meals().map(each => {
      price.push(each.price)
    });
  }
}

class Meal{
  constructor(title, price){
    this.title = title
    this.price = price
    this.id = ++mealId
    store.meals.push(this)
  }

  deliveries(){
    return store.deliveries.filter(eachDelivery => {
      return eachDelivery.meal === this.id
    });
  }

  customers(){
    return this.deliveries().map(each => {
      return each.customer()
    });
  }

  static byPrice(){
    return store.meals.sort(function(a,b){
      return a.price < b.price
    })
  }
}

class Delivery{
  constructor(meal = {}, customer = {}) {
    this.mealId = meal.id;
    this.customerId = customer.id;
    this.id = ++deliveryId;
    store.deliveries.push(this);
  }
  meal() {
      return store.meals.find(meal => {
        return meal.id === this.mealId;
      });
    }
  customer() {
    return store.customers.find(customer => {
      return customer.id === this.customerId;
    });
  }
}


class Employer{
  constructor(name){
    this.name = name
    this.id = ++employerId
    store.employers.push(this)
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
