const birthDate = document.querySelector('#birth-date');
const submit = document.querySelector('#submit');
const luckyNumber = document.querySelector('#lucky-number');
const display = document.querySelector('#display');

const check = () => {
  const dt = birthDate.value; 
  const ln = parseInt(luckyNumber.value);
  
  if(dt && ln){
    const date = calculateSum(dt);
    checkLuckiness(date, ln);
  }
  else{
    showMessage("Please enter valid values")
  }

}

const showMessage = (msg) => {
  display.innerHTML = msg;
}

const checkLuckiness = (date, ln) => {
  if(date % ln === 0){
    showMessage(`${ln} is a lucky number 🤩🤩`);
  }  else{
    showMessage(`${ln} is not a lucky number 😕`);
  }
}

const calculateSum = (dt) => {
  let sum = 0;
  for(let i = 0; i<dt.length; i++){
    let temp = parseInt(dt[i]);
    if(!isNaN(temp)){
      sum+=temp;
    }
  }
  return sum;
}

submit.addEventListener('click', check);