// Module Pattern
// What is a Module Pattern?
// The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering.

// Module pattern example: Counter module
var CounterModule = (function () {
  // Private variable
  let count = 0;

  // Private method
  function privateLog() {
    console.log("Current count:", count);
  }

  // Public methods
  return {
    increment: function () {
      count++;
      privateLog();
    },
    decrement: function () {
      count--;
      privateLog();
    },
    reset: function () {
      count = 0;
      privateLog();
    },
    getCount: function () {
      return count;
    }
  };
})();

// Using the CounterModule
CounterModule.increment(); // Current count: 1
CounterModule.increment(); // Current count: 2
CounterModule.decrement(); // Current count: 1
CounterModule.reset(); // Current count: 0
console.log(CounterModule.getCount()); // 0

// Example 2: shopping cart module
var ShoppingCart = (function () {
    let items = [];
  
    function privateLog() {
      console.log("Current items:", items);
    }
  
    return {
      addItem: function (item) {
        items.push(item);
        privateLog();
      },
      removeItem: function (item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
        privateLog();
      },
      getTotalItems: function () {
        return items.length;
      },
      getItems: function () {
        return items.slice(); // Return a copy of the items array
      }
    };
  })();
  
  // Using the ShoppingCart module
  ShoppingCart.addItem("Apple");
  ShoppingCart.addItem("Banana");
  ShoppingCart.removeItem("Apple");
  console.log(ShoppingCart.getTotalItems()); // 1
  console.log(ShoppingCart.getItems()); // ["Banana"]


//   Example 3: Authentication module

var AuthModule = (function () {
    let user = null;
  
    function privateLog() {
      console.log("Current user:", user);
    }
  
    return {
      login: function (username) {
        user = username;
        privateLog();
      },
      logout: function () {
        user = null;
        privateLog();
      },
      getUser: function () {
        return user;
      },
      isAuthenticated: function () {
        return user !== null;
      }
    };
  })();
  
  // Using the AuthModule
  AuthModule.login("JohnDoe");
  console.log(AuthModule.isAuthenticated()); // true
  console.log(AuthModule.getUser()); // "JohnDoe"
  AuthModule.logout();
  console.log(AuthModule.isAuthenticated()); // false
