function calculatebmi(){
    let weight=document.getElementById('weight').value
    let height=document.getElementById('height').value
    let bmi=(weight/(height*height))
    console.log(bmi)
    document.getElementById('heading').innerHTML='Your BMI  is: '
    document.getElementById('bmi-output').innerHTML=bmi.toFixed(2)
    if(bmi>25){
        document.getElementById('message').innerHTML="You are over weight" 
           }
    else if(bmi<18){
        document.getElementById('message').innerHTML="You are under weight"
    }
    else if(bmi>=18 && bmi<=25){
        document.getElementById('message').innerHTML="You are normal:keep it up!"
    }
    else{
        document.getElementById('message').innerHTML="Write your age "
    }

}
function reload(){
    window.location.reload()
}