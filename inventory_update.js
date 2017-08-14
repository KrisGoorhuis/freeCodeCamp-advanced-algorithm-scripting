
// Instructions: 
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.


function sortArrayAlphabetically(array) {
  var changedSomething = false;
  
  for (var i = 0; i < array.length-1; i++) { 
    var firstValue = array[i][1].charCodeAt(0);
    var secondValue = array[i+1][1].charCodeAt(0);
    var itemA = array[i];
    var itemB = array[i+1];
    
    if (firstValue > secondValue) {
      array[i] = itemB;
      array[i+1] = itemA;
      changedSomething = true;
    }
  }
  if (changedSomething === true) {
    sortArrayAlphabetically(array);
  }
  
  return array;
}

function updateInventory(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) { // For each new item
      var itemExistsInInventory = false; // Assume we'll need to add its listing. Resets on iteration.
      
      for (var k = 0; k < arr1.length; k++) { // Compare against all existing items
        if (arr1[k][1] === arr2[i][1]) { // If the new item is anywhere in old inventory
          itemExistsInInventory = true;
          arr1[k][0] += arr2[i][0]; // Add stock value
        }
      }
      
      if (itemExistsInInventory === false) { // If the new item was not found, add listing.
        arr1.push(arr2[i]);
      } 
      
    }
    arr1 = sortArrayAlphabetically(arr1);
    return arr1;
}



// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

// 
