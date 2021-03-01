/*declare variable names*/
var num_hotdogs,num_fries,num_soda, sub_total, discount_total, total_massTax;

num_hotdogs = prompt("How many hot dogs do you want", " " );
//document.write(num_hotdogs);

num_fries = prompt("How many fries do you want", " " );
//document.write(num_fries);

num_soda = prompt("How much soda do you want", " " );
//document.write(num_soda);

sub_total = (3.25 * num_hotdogs) + (num_fries * 2.00) + (num_soda * 1.50);
//alert("This is the sub_total " + sub_total.toFixed(2));

if (sub_total >= 20) {
    discount_total = sub_total * .90;
}else{
    discount_total = sub_total;
}

//alert("sub_total with or without discount " + sub_total.toFixed(2));

total_massTax = sub_total + (sub_total * .0625);
//total_massTax = total_massTax.toFixed(2);

//alert("sub_total with mass tax applied " + total_massTax.toFixed(2));
