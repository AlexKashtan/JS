//3**:
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, 
//преобразовываясь в number
let age_2=18
let age_3=60
const checkAge=function(age_1){
    if (age_1 && !isNaN(age_1))
    {
        if (age_1 <= age_2) {
            console.log('You dont have access cause your age is '+age_1+' Its less then')}

            else if (age_1 >=  age_2 && age_1 < age_3){
            console.log("Welcome!")}

            else if (age_1 > age_3){
            console.log("Keep calm and look Culture channel")}
            
            else console.log("Technical work")
    
}
else console.log("'"+age_1+"'"+ ' is not Number!')
}
checkAge(17)
checkAge(18)
checkAge(60)
checkAge('value')
checkAge('17')