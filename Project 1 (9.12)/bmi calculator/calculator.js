


function BMIclick()

    { let w = document.getElementById('weight').value;
    let h= document.getElementById('height').value;

    let BMI=(w/(h*h)*10000);


   
    
    if (BMI<18,5)
    {
        document.getElementById("results").innerHTML = BMI;
    }    
                         
    if ((18.5 <= BMI) && (BMI <= 24.9))
    {
    document.getElementById("results").innerHTML = BMI;
    }
                         
     if ((25<=BMI) && (BMI<=29,9))
    {
    document.getElementById("results").innerHTML = BMI;
    }                     
     if (BMI>30)
    {
    document.getElementById("results").innerHTML = BMI; 
    }               

}
