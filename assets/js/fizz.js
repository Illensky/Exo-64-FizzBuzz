let number = prompt('azy aboul un nombre oklm !!!')

let mutiple3 = (number%3)===0 && (number%5)!==0;
let multiple5 = (number%5)===0 && (number%3)!==0;
let multiple53 = (number%3)===0 && (number%5)===0;

if(mutiple3){
    alert('fizz')
}

else if(multiple5){
    alert('buzz')
}

else if (multiple53) {
    alert('fizzbuzz')
}
else {
    alert(number)
}