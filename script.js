// ==========================
// Part 1: Date Display
// ==========================

var date = new Date();

function seasonChecker(month) {
    if (month > 2 && month <=5) {
        return "Spring";
    } else if (month > 5 && month <=8) {
        return "Summer";
    } else if (month > 8 && month <=11) {
        return "Fall";
    } else {
        return "Winter";
    }
}

document.getElementById("dateOutput").innerHTML = "Today is " + (date.getMonth()+1).toString().padStart(2, '0') + "/" + date.getDate().toString().padStart(2, '0') + "/" + date.getFullYear().toString() +"<br><br>" + "The current season is: " + seasonChecker(date.getMonth()+1);

// ==========================
// Part 2: Number Conversion
// ==========================

var numStr1 = "67";
var numStr2 = "88";

var decStr = "1.21";

var nonNumStr = "nuclear";

var convertedNum1 = Number(numStr1);
var convertedNum2 = Number(numStr2);
var convertedDec = Number(decStr);
var convertedNonNum = Number(nonNumStr);

var isNum1NaN = Number.isNaN(convertedNum1);
var isNum2NaN = Number.isNaN(convertedNum2);
var isDecNaN = Number.isNaN(convertedDec);
var isNonNumNaN = Number.isNaN(convertedNonNum);

var isNum1Int = Number.isInteger(convertedNum1);
var isNum2Int = Number.isInteger(convertedNum2);
var isDecInt = Number.isInteger(convertedDec);
var isNonNumInt = Number.isInteger(convertedNonNum);

var conversionResultString =  "Original: '" + numStr1 + "' -> Converted: " + convertedNum1 + " -> isNaN: " + isNum1NaN + " -> isInteger: " + isNum1Int + "<br><br>" +
"Original: '" + numStr2 + "' -> Converted: " + convertedNum2 + " -> isNaN: " + isNum2NaN + " -> isInteger: " + isNum2Int + "<br><br>" +
"Original: '" + decStr + "' -> Converted: " + convertedDec + " -> isNaN: " + isDecNaN + " -> isInteger: " + isDecInt + "<br><br>" +
"Original: '" + nonNumStr + "' -> Converted: " + convertedNonNum + " -> isNaN: " + isNonNumNaN + " -> isInteger: " + isNonNumInt;

var conditionalString = "";
function isNaNCheck(value) {
    convertedValue = Number(value);
    if (Number.isNaN(convertedValue) == true) {
        conditionalString = "The string '" + value + "' cannot be converted to a number.<br><br>";
        return conditionalString;
    } else {
        conditionalString = "The string '" + value + "' can be converted to a number.<br><br>";
        return conditionalString;
    }
}

document.getElementById("numberConversionOutput").innerHTML = conversionResultString + "<br><br>" + isNaNCheck(numStr1) + isNaNCheck(numStr2) + isNaNCheck(decStr) + isNaNCheck(nonNumStr);

// ==========================
// Part 3: Math & Formatting
// ==========================

var priceItem1 = 19.99;
var priceItem2 = 59.99;
var priceItem3 = 24.99;
var taxRate = 0.075;
var shipping = 29.99;

var subtoal = priceItem1 + priceItem2 + priceItem3;
var totalTax = subtoal * taxRate;
var totalCost = subtoal + totalTax + shipping;

var mathResultString = "Item 1: $" + priceItem1 + "<br>" +
"Item 2: $" + priceItem2 + "<br>" +
"Item 3: $" + priceItem3 + "<br>" +
"Tax Rate: 7.25%<br>" +
"Shipping: $" + shipping + "<br><br>" +
"Subtotal: $" + subtoal.toFixed(2) + "<br>" +
"Total Tax: $" + totalTax.toFixed(2) + "<br>" +
"Total Cost: $" + totalCost.toFixed(2);

document.getElementById("mathOutput").innerHTML = mathResultString;

// ==========================
// Part 4: Conditionals
// ==========================

// Condionals are found in:
// section 1 in the function "seasonChecker"
// section 2 in the function "isNaNCheck"