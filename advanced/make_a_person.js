/*
  Fill in the object constructor with the following methods below:

    getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)

  Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. 
  These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
  this.firstName = firstAndLast.substring(0, firstAndLast.indexOf(' '));
  this.lastName = firstAndLast.substring(firstAndLast.indexOf(' '));
  
  function getFirstName() {
    return this.firstName;
  }
  
  function getFullName() {
    return this.firstName + this.lastName;
  }
  
  return {
    getFullName: getFullName.bind(this)
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
