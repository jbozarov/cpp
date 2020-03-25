You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]
return the three product names with the highest revenue (amount * price).

Note: if multiple products have the same revenue, order them according to their original positions in the input list


function top3(products, amounts, prices) {
  let res = {}; 
  for ( var i=0; i<products.length; i++ ){
    res[products[i]] = amounts[i]*prices[i]
  }
	return Object.keys(res).sort((a, b)=>res[b]-res[a]).slice(0, 3)
}

top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399]). //[ 'Cell Phones', 'Vacuum Cleaner', 'Computer' ]
