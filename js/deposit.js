// step 1: add event listener to the diposite button
document.getElementById("btn-deposit").addEventListener("click", function(){
    // step 2: get the deposit amount from the deposi input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    /* const withdrawField = document.getElementById("withdraw-field");
    const withdrawAmount = withdrawField.value; */
    
    // step 3: get the current deposit total amount
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 7: clear the deposit field
    depositField.value = '';

    /* const withdrawTotalElement = document.getElementById("withdraw-total");
    const withdrawTotal = withdrawTotalElement.innerText;
    withdrawTotalElement.innerText = withdrawAmount; 
    // step 7: clear the deposit field
    depositField.value = '';*/

    // step 7: clear the deposit field
    depositField.value = '';
});