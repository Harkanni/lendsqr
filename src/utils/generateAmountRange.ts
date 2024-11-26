function generateAmountRange(amountStr: string = '₦100000', subtractValue: number) {
   // Step 1: Remove the currency symbol and commas
   let numericValue = parseFloat(amountStr.replace(/[₦,]/g, ''));

   // Step 2: Subtract the given value
   let updatedValue = numericValue - subtractValue;

   // Step 3: Format the result back to currency string
   let formattedValue = `₦${updatedValue.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;

   // Step 4: Return the formatted string
   return `${formattedValue} - ${amountStr}`;
}


export default generateAmountRange