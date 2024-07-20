let counterEl=document.getElementById("counterValue");

function onIncrement(){
let previousCounterValue = counterEl.textContent;
let updatedCounterValue=parseInt(previousCounterValue)+1;
counterEl.textContent=updatedCounterValue;
if(updatedCounterValue>0){
    counterEl.style.color="green"
}
else if(updatedCounterValue<0){
    counterEl.style.color="red"
}
else{
    counterEl.style.color="black"
}

}

function onDecrement(){
let previousCounterValue = counterEl.textContent;
let updatedCounterValue=parseInt(previousCounterValue)-1;
counterEl.textContent=updatedCounterValue;
if(updatedCounterValue>0){
    counterEl.style.color="green"
}
else if(updatedCounterValue<0){
    counterEl.style.color="red"
}
else{
    counterEl.style.color="black"
}

}
function onReset(){
updatedCounterValue=0;
counterEl.textContent=updatedCounterValue;
if(updatedCounterValue>0){
    counterEl.style.color="green"
}
else if(updatedCounterValue<0){
    counterEl.style.color="red"
}
else{
    counterEl.style.color="black"
}
}