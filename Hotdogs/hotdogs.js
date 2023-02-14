numDogs = 0, numFries = 0, numSoda = 0, subtotal = 0;
numDogs = parseFloat(prompt("hi how many hotdogs would you like", ""));
numFries = parseFloat(prompt("and how many portion of fries would you like", ""));
numSoda = parseFloat(prompt("and how many sodas would you like", ""));
subtotal = (numDogs * 4) + (numFries * 3.5) + (numSoda * 1.75);
discount = 0;

if (numDogs > 0) document.write("Hotdogs(" + numDogs + "): $" + (numDogs * 4));
if (numFries > 0) document.write("<br>Fries(" + numFries + "): $" + (numFries * 3.5));
if (numSoda > 0) document.write("<br>Sodas(" + numSoda + "): $" + (numSoda * 1.75));
document.write("<br>Subtotal: $" + subtotal);

if (subtotal > 20) {
    discount = 0.1 * subtotal;
    discount = (int(discount * 100))/100;
    console.log(discount);
    document.write("<br>Discount (For orders over $20): -" + discount);
    subtotal -= discount;
    document.write("<br> New Subtotal: $" + (subtotal));
}

tax = (0.0625 * subtotal);
tax = (tax * 100)/100;
document.write("<br> Tax of the subtotal (6.25%) is: $" + tax);
document.write("<br> final amount is: $" + (subtotal + tax));


