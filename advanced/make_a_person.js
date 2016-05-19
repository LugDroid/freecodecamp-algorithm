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

function Person(firstAndLast) {
  var firstName = firstAndLast.substring(0, firstAndLast.indexOf(' '));
  var lastName = firstAndLast.substring(firstAndLast.indexOf(' ') + 1);

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };

  this.setFirstName = function(first) {
    firstName = first;
  };

  this.setLastName = function(last) {
    lastName = last;
  };

  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.substring(0, firstAndLast.indexOf(' '));
    lastName = firstAndLast.substring(firstAndLast.indexOf(' ') + 1);
  };
}

var bob = new Person('Bob Ross');
bob.setFirstName('Robert');
console.log(bob.getFullName());
