function calculatebmi(){
    let weight=document.getElementById('weight').value
    let height=document.getElementById('height').value
    let bmi=(weight*10000/(height*height))
    console.log(bmi)
    if(bmi>30){
        document.getElementById('heading').innerHTML='Your BMI  is: '
    document.getElementById('bmi-output').innerHTML=bmi.toFixed(2)
        document.getElementById('message').innerHTML="You are obbesed.</br></br>You must follow this diet to get fit:-"
         document.getElementById('message1').innerHTML="Meal 1:-One scoop whey protien + 50 gms of oats+250ml water+1 tbsp peanut butter."
         document.getElementById('message2').innerHTML="Meal 2:-Two chapatti's+ 200gms of rice+3 egg whites+200 curd+ Two multivitamins tablets + Two omega-3 tablets."
         document.getElementById('message3').innerHTML="Meal 3:-Two bread slices+ Two tablespoon peanut butter+ one banana ."
         document.getElementById('message4').innerHTML="Meal 4:-Four Eggs or whey protien(post workout meal)"
         document.getElementById('message5').innerHTML="Meal 5:-One bowl salad,6 egg whites."
         document.getElementById('message6').innerHTML="</br></br>You must follow these exercises to get fit:-"
         document.getElementById('message7').innerHTML="Exercise 1:- Walking 20 mins"
         document.getElementById('message8').innerHTML="Exercise 2:- Jogging next 20 mins."
         document.getElementById('message9').innerHTML="Exercise 3:- Cycling+dancing for 45 mins."
         document.getElementById('message10').innerHTML="Exercise 4:- Do swimming as much as you can."
         document.getElementById('message11').innerHTML="Exercise 5:-Do inclined push ups whenever you are free to build your strength ."
        }
    else if(bmi>25){
        document.getElementById('heading').innerHTML='Your BMI  is: '
    document.getElementById('bmi-output').innerHTML=bmi.toFixed(2)
        document.getElementById('message').innerHTML="You are over weight.</br></br>You must follow this diet to get fit:-" 
        document.getElementById('message1').innerHTML="Meal 1:- omellete- 1 egg+1 onion + 1 tomato, 1 scoop of whey protien."
        document.getElementById('message2').innerHTML="Meal 2:-150gm of any fruit (except banana), 50gm of poha (weighted when raw)."
        document.getElementById('message3').innerHTML="Meal 3:- 1 slice of brown bread+ 100gm of fish + 200gm of vegetables,15gm(uncooked) dal,50gm(uncooked) rice , 200gm(uncooked) curd ."
        document.getElementById('message4').innerHTML="Meal 4:-150gm of fruit except banana + 1 slice of bread + 150gm of fish"
        document.getElementById('message5').innerHTML="Meal 5:- 200gm of boiled vegetables,15(uncooked)dal,50gm(uncooked) rice,200gm(uncooked) curd."
        document.getElementById('message6').innerHTML="</br></br>You must follow these exercises to get fit:-"
        document.getElementById('message7').innerHTML="Exercise 1:- Twenty minutes of cardio"
        document.getElementById('message8').innerHTML="Exercise 2:- Three sets of pull ups each five reps initially and then increase as per your strength with the help of trainer."
        document.getElementById('message9').innerHTML="Exercise 3:- Three sets of push ups each ten reps initially and then increase as per your strength with the help of trainer(initially inclined at 90degree,then 45degree,then normal)."
        document.getElementById('message10').innerHTML="Exercise 4:- Do dead lift in presence of your trainer initially three sets of five reps and increase on weekly basis."
        document.getElementById('message11').innerHTML="Exercise 5:-Do crunches three sets of five reps and increase weekly."      }
    else if(bmi<18){
        document.getElementById('heading').innerHTML='Your BMI  is: '
    document.getElementById('bmi-output').innerHTML=bmi.toFixed(2)
        document.getElementById('message').innerHTML="You are under weight.</br></br>You must follow this diet to get fit:-"
        document.getElementById('message1').innerHTML="Meal 1:- 50gm of oats + 10 almonds + 1 tablespoon honey + 1 glass honey+ 1 banana + 2 full eggs"
        document.getElementById('message2').innerHTML="Meal 2:- 200gm white rice + 1 bowl moong dal + salad +6 egg whites/paneer."
        document.getElementById('message3').innerHTML="Meal 3:- 4 brown bread+peanut butter ."
        document.getElementById('message4').innerHTML="Meal 4:- 6-8 egg whites + 1 banana/1 boiled potato ."
        document.getElementById('message5').innerHTML="Meal 5:- 200gm of white rice + moong dal + salad + paneer."
        document.getElementById('message6').innerHTML="</br></br>You must follow these exercises to get fit:-"
        document.getElementById('message7').innerHTML="Exercise 1:- Ten minutes of cardio"
        document.getElementById('message8').innerHTML="Exercise 2:- Three sets of pull ups each ten reps initially and then increase as per your strength."
        document.getElementById('message9').innerHTML="Exercise 3:- Three sets of push ups each fifteen reps initially and then increase as per your strength."
        document.getElementById('message10').innerHTML="Exercise 4:- Do dead lift in presence of your trainer initially three sets of ten reps and increase on weekly basis."
        document.getElementById('message11').innerHTML="Exercise 5:-Do crunches three sets of seven reps and increase weekly."      
    }
    else if(bmi>=18 && bmi<=25){
        document.getElementById('heading').innerHTML='Your BMI  is: '
    document.getElementById('bmi-output').innerHTML=bmi.toFixed(2)
        document.getElementById('message').innerHTML="You are normal:keep it up! </br></br>You must follow this diet to get fit:-"
        document.getElementById('message1').innerHTML="Meal 1:- 4 brown bread/2 paratha,1 glass milk/2 eggs."
        document.getElementById('message2').innerHTML="Meal 2:-150gm of any fruit,150gm of nuts (cashew and almonds)."
        document.getElementById('message3').innerHTML="Meal 3:- 200gm of brown rice,150gm of chicken/vegetable,150gm curd ."
        document.getElementById('message4').innerHTML="Meal 4:- 150gm sprouts"
        document.getElementById('message5').innerHTML="Meal 5:- boiled vegetables,100gm chicken,150gm rice."
        document.getElementById('message6').innerHTML="</br></br>You must follow these exercises to get fit:-"
        document.getElementById('message7').innerHTML="Exercise 1:- Twenty five minutes of cardio"
        document.getElementById('message8').innerHTML="Exercise 2:- Three sets of pull ups each ten reps initially and then increase 5 weekly ."
        document.getElementById('message9').innerHTML="Exercise 3:- Three sets of push ups each twenty reps initially and then increase 5 weekly."
        document.getElementById('message10').innerHTML="Exercise 4:- Do burfee, russian twist and all core exercises ."
        document.getElementById('message11').innerHTML="Exercise 5:-Do crunches three sets of ten reps and increase weekly ."
       
    }
    else{
        document.getElementById('message').innerHTML="Write your weight and height"
    }

}
function reload(){
    window.location.reload()
}
