function onChange() {
    let inputAmount = document.getElementById('inputAmount').value;
    let floatAmount = parseFloat(inputAmount);
    let fromValue = document.getElementById('fromCurrent').value;
    let toValue = document.getElementById('toCurrent').value;

    let result1 = inputAmount * 23;
    let result2 = inputAmount/23;
    let ketqua;
    if(fromValue == 'VN' && toValue == 'USD') {
        ketqua = result2;
    }
    else if(fromValue == 'USD' && toValue =='VN') {
        ketqua = result1;
    }
    else {
        ketqua = inputAmount;
    }
    document.getElementById('ketqua').innerHTML = ketqua;
}