numDogs = 0, numFries = 0, numSoda = 0, subtotal = 0;
numDogs = parseFloat(prompt("hi how many hotdogs would you like", "1"));
numFries = parseFloat(prompt("and how many portion of fries would you like", "1"));
numSoda = parseFloat(prompt("and how many sodas would you like", "1"));
subtotal = (numDogs * 4) + (numFries * 3.5) + (numSoda * 1.75);
discount = 0;

/* Very ratchet statements to add the last 2 decimal places for all 3 items */
document.write("Hotdogs(" + numDogs + "): $" + (numDogs * 4) + ".00");
((numFries % 2 == 1) && (numFries > 0)) ? document.write("<br>Fries(" + numFries + "): $" + (numFries * 3.50) + "0") 
                                        : document.write("<br>Fries(" + numFries + "): $" + (numFries * 3.50) + ".00");
if (numSoda % 4 == 0) {
    document.write("<br>Sodas(" + numSoda + "): $" + (numSoda * 1.75) + ".00")
} 
else if (numSoda % 2 == 0) {
    document.write("<br>Sodas(" + numSoda + "): $" + (numSoda * 1.75) + "0");
} else {
    document.write("<br>Sodas(" + numSoda + "): $" + (numSoda * 1.75));
}

subtotal += "";
if (subtotal.includes(".")){
    subtotal = subtotal.slice(0, (subtotal.indexOf(".") + 3));
}




document.write("<br>Subtotal: $" + subtotal);
parseFloat(subtotal);

if (subtotal > 20) {
    discount = (0.1 * subtotal).toString();
    discount = discount.slice(0, (discount.indexOf(".")) + 3);
    discount = parseFloat(discount);
    document.write("<br>Discount (For orders over $20): -" + discount);
    subtotal -= discount;
    document.write("<br> New Subtotal: $" + (subtotal));
}

tax = (0.0625 * subtotal).toString();
tax = tax.slice(0, (tax.indexOf(".") + 3));
document.write("<br> Tax of the subtotal (6.25%) is: $" + tax);
document.write("<br> final amount is: $" + (subtotal + parseFloat(tax)));


