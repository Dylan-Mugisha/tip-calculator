
let billTotalInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotal = document.getElementById('perPersonTotal')

let numberOfPeople= Number(numberOfPeopleDiv.innerText)

let calculateBill = () => {
  let bill = Number(billTotalInput.value)
   let tip = Number(tipInput.value)/100 
  let tipAmount =bill*tip;
    
  let totalBill= tipAmount+bill;
    perPersonTotal.innerText = (totalBill/numberOfPeople).toLocaleString('en-US')
  
  }
  
  const increasePeople = () => {
  
  numberOfPeople++
  numberOfPeopleDiv.innerText=numberOfPeople

  }
  
  const decreasePeople = () => {
  if(numberOfPeopleDiv.innerText>1){
    numberOfPeople--
  }

  numberOfPeopleDiv.innerText=numberOfPeople
     
  }

