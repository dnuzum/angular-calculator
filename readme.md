#Angular Calculator

Your goal is to create a calculator using Angular. Starter code has been provided for you.

**The calculator should function as follows:**

* Calculator should start with a 0 value
* If a number is pressed it should overwrite the 0 with that number
* If a subsequent number is pressed it should be appended to the end
* When pressing an operator (+, -, x, ÷) there should be no apparent change.
* When entering a new number the screen should clear and be replaced by that new number
* Again, each subsequent number should be appended.
* When another operator (or equal) is pressed it should total the values and update the screen (and be ready for the next operation)
* If a number is entered without an operator being pressed first it should clear the screen / memory and that new number should become the running total
* Pressing clear should revert it back to 0


For an example of how the calculator should function see the built in OSX calculator (go to spotlight search CMD+SPACE, "calculator", and hit enter)

##Suggested Process

* Add ng-app / module (test with console.log)
* Add ng-controller / controller (test with console.log)
* Bind display to $scope variable
* Get buttons to update display
* Get clear button to clear display
* Work on getting operators working

##Bonus

* Highlight the active operator key using `ng-class`
* Add decimal point button
* Add a positive / negative button
* Add memory / recall buttons
