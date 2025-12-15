const tax_rate = prompt('Introduceți rata de impozitare (0.10)');
const shipping_threshold = prompt('Introduceți pragul pentru livrare (1000)');

let subtotal = 0;

for (let item of cart) {
    let total = calculateTotal(item.quantity, item.product.price);
    subtotal += total;
    outputCartRow(item, total);
}

const tax = calculateTax(subtotal, parseFloat(tax_rate));
const shipping = calculateShipping(subtotal, parseFloat(shipping_threshold));
const grand = calculateGrandTotal(subtotal, tax, shipping);

document.write('<tr class="totals">');
document.write('<td colspan="4">Subtotal</td>');
document.write('<td>' + subtotal.toFixed(2) + 'lei</td>');
document.write('</tr>');

document.write('<tr class="totals">');
document.write('<td colspan="4">Taxe</td>');
document.write('<td>' + tax.toFixed(2) + ' lei</td>');
document.write('</tr>');

document.write('<tr class="totals">');
document.write('<td colspan="4">Taxa de livrare</td>');
document.write('<td>' + shipping.toFixed(2) + ' lei</td>');
document.write('</tr>');

document.write('<tr class="totals">');
document.write('<td colspan="4" class="focus">Total</td>');
document.write('<td class="focus">' + grand.toFixed(2) + ' lei</td>');
document.write('</tr>');