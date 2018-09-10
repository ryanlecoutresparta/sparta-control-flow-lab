
alert("Welcome to the Control Flow Lab, let's go to the fruit and veg shop!");

var type = prompt("Would you like to buy two pieces of 'fruit' or 'veg'?");

var grapes = 2.99;
var apples = 1;
var bananas = 3;
var pears = 2.99;
var cucumber = 2;
var sweetcorn = 1.99;
var peas = 3;
var carrots = 2.99;
var sumTotal = parseFloat("0.00");
var breakVariable = 0;

var fruitarray = ['grapes', ' apples', ' bananas or pears']
var vegarray = ['cucumber', ' sweetcorn', ' peas or carrots']




while (breakVariable < 2) {

  if (type === 'fruit' && breakVariable === 0) {
    var fruit = prompt(`What's the first piece of fruit you'd like: ${fruitarray}?`);
    switch (fruit) {
      case 'grapes':
      var type2 = alert("Grapes are £2.99.");
      var sumTotal =+ sumTotal + grapes;
      breakVariable ++
      break;
      case 'apples':
      var type2 = alert("Apples are £1.");
      var sumTotal =+ sumTotal + apples;
      breakVariable ++
      break;
      case 'bananas':
      var type2 = alert("Bananas are £3.");
      var sumTotal =+ sumTotal + bananas;
      breakVariable ++
      break;
      case 'pears':
      var type2 = alert("Pears are £2.99.");
      var sumTotal =+ sumTotal + pears;
      breakVariable ++
      break;
      default:
      alert(`Sorry, we're out of ${fruit}!`)
    }
  }

  else if (type === 'fruit' && breakVariable === 1) {
    var fruit = prompt(`What's the second piece of fruit you'd like: ${fruitarray}?`);
    switch (fruit) {
      case 'grapes':
      var type2 = alert("Grapes are £2.99.");
      var sumTotal =+ sumTotal + grapes;
      breakVariable ++
      break;
      case 'apples':
      var type2 = alert("Apples are £1.");
      var sumTotal =+ sumTotal + apples;
      breakVariable ++
      break;
      case 'bananas':
      var type2 = alert("Bananas are £3.");
      var sumTotal =+ sumTotal + bananas;
      breakVariable ++
      break;
      case 'pears':
      var type2 = alert("Pears are £2.99.");
      var sumTotal =+ sumTotal + pears;
      breakVariable ++
      break;
      default:
      alert(`Sorry, we're out of ${fruit}!`)
    }
  }

  else if (type === 'veg' && breakVariable === 0) {
    var veg = prompt(`What's the first piece of veg you'd like: ${vegarray}?`);
    switch (veg) {
      case 'cucumber':
      var type2 = alert("Cucumbers are £2.");
      var sumTotal =+ sumTotal + cucumber;
      breakVariable ++
      break;
      case 'sweetcorn':
      var type2 = alert("Sweetcorn is £1.99.");
      var sumTotal =+ sumTotal + sweetcorn;
      breakVariable ++
      break;
      case 'peas':
      var type2 = alert("Peas are £3.");
      var sumTotal =+ sumTotal + peas;
      breakVariable ++
      break;
      case 'carrots':
      var type2 = alert("Carrots are £2.99.");
      var sumTotal =+ sumTotal + carrots;
      breakVariable ++
      break;
      default:
      alert(`Sorry, we're out of ${veg}!`)
    }
  }

  else if (type === 'veg' && breakVariable === 1) {
    var veg = prompt(`What's the second piece of veg you'd like: ${vegarray}?`);
    switch (veg) {
      case 'cucumber':
      var type2 = alert("Cucumbers are £2.");
      var sumTotal =+ sumTotal + cucumber;
      breakVariable ++
      break;
      case 'sweetcorn':
      var type2 = alert("Sweetcorn is £1.99.");
      var sumTotal =+ sumTotal + sweetcorn;
      breakVariable ++
      break;
      case 'peas':
      var type2 = alert("Peas are £3.");
      var sumTotal =+ sumTotal + peas;
      breakVariable ++
      break;
      case 'carrots':
      var type2 = alert("Carrots are £2.99.");
      var sumTotal =+ sumTotal + carrots;
      breakVariable ++
      break;
      default:
      alert(`Sorry, we're out of ${veg}!`)
    }
  }

  else {
    alert("That's not fruit or veg! Try again!");
    var type = prompt("Would you like to buy 'fruit' or 'veg'?");
  }
}

if (breakVariable >= 2) {
  var finalanswer = prompt(`Thank you! You owe £${sumTotal}. Is this okay? (y/n)`);
    if (finalanswer === 'y') {
      alert('Please send your money to givememoney@cash.com!');
    } else if (finalanswer === 'n') {
      alert("That's a shame.");
      location.reload();
    } else {
      alert("Try putting a valid answer... Let's start again.");
      location.reload();
    }
}
