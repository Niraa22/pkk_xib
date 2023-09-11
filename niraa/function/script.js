let displayvalue = '';

function calculator(button){
    const value = button.innertext;
    if(value === '='){
        try{
            displayvalue = eval(displayvalue);
        } catch(error){
            displayvalue = 'error'
        }
    } else if (value === 'c'){
        displayvalue = '';
    } else{
        displayvalue += value;
    }
    document.getElementById('display').value = displayvalue;
}