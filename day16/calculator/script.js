// let keyPressed=(event)=>{
//     if(isFinite(event.key)){
//         let inp = document.getElementById('inputVal').value
//         document.getElementById('demo').innerText=`Output is ${eval(inp)}`
//     }
// }

let outPut=document.getElementById('result')

function display(num){
    outPut.value+=num
}

function solve(){
   try{
    outPut.value= eval(outPut.value)
   }
   catch{
    alert("Invalid input")
   }
}

function clearScreen(){
    outPut.value=""
}

