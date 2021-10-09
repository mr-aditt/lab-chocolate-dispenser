var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color, count){
    if(count<=0){
        return "Number cannot be zero/negative"
    }
    for(let c=count; c>0; c--){chocolates.unshift(color)}
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number){
    var removed = []
    if(number>chocolates.length){return "Insufficient chocolates in the dispenser"}
    else if(number<=0){return "Number cannot be zero/negative"}
    for(let c=number; c>0; c--){removed.push(chocolates.shift())}
    return removed
}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number){
    var dispensed = []
    if(number>chocolates.length){return "Insufficient chocolates in the dispenser"}
    else if(number<=0){return "Number cannot be zero/negative"}
    for(let c=number; c>0; c--){dispensed.push(chocolates.pop())}
    return dispensed
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
    var dispensed = []
    if(number>chocolates.length){return "Insufficient chocolates in the dispenser"}
    else if(number<=0){return "Number cannot be zero/negative"}
    for(let c=number; c>0; c--){
        if(color==chocolates[chocolates.length-1]){
            dispensed.push(chocolates.pop())
        }
    }
    return dispensed
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates){
    dict = {green:0, silver:0, blue:0, crimson:0, purple:0, red:0, pink:0}
    for(var x in chocolates){
        dict[chocolates[x]]+=1 
    }
    var dictVal = []
    for (var key in dict) {
        if(dict[key]>0){
            var val = dict[key]
            dictVal.push(val)
        }
    }
    return dictVal
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates){
    dict = {blue:0, purple:0, green:0, crimson:0, silver:0, red:0, pink:0}
    for(var x in chocolates){dict[chocolates[x]]+=1}
    items = Object.keys(dict).map(key=>{return [key, dict[key]]})
    items.sort((a, b)=>{return b[1] - a[1]})
    var index = 0
    for(var i=0;i<items.length;i++){
      var count = 0
      if(items[i][1]>0){
        while(count<items[i][1]){
          chocolates[index]=items[i][0]
          count++
          index++
        }
      }
    }
    return chocolates
}

//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates,number, color, finalColor){
    var count = 0
    if(number<=0){return "Number cannot be zero/negative"}
    else if(color==finalColor){return "Can't replace the same chocolates"}
    for(var index=0; index<chocolates.length; index++){
        if(chocolates[index]==color&&count<number){
            chocolates[index]=finalColor
            count++
        }
    }
    return chocolates
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor){
    var count=0
    var to_return = []
    if(color==finalColor){return "Can't replace the same chocolates"}
    for(var index=0; index<chocolates.length; index++){
        if(chocolates[index]==color){
            chocolates[index]=finalColor
            count++
        }
    }
    to_return.push(count)
    to_return.push(chocolates)
    return to_return
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
