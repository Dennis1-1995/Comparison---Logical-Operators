// Deel 1:
const age = 25;

if(age>=18 &&age<=25){
    console.log("Je krijgt 50% korting!");
}
else{
    console.log('Helaas, je krijgt geen korting');
}

// Deel 2:
const firstName = 'Bram';

if (firstName === 'Sarah' || firstName === 'Bram'){
    console.log('Welkom ' + firstName + ' Je krijgt een gratis biertje');
}else{
    console.log('Helaas, geen gratis biertje');
}

//Deel 3:
const totalAmount = 25;

if (totalAmount >= 100){
    console.log('Je krijgt een gratis flesje champagne');
}else if(totalAmount >=50){
    console.log('Je krijgt een gratis portie nachos');
}else if(totalAmount>=25){
    console.log('Je krijgt gratis (vega)bitterballen.');
}else{
    console.log('Bestel 25 euro of meer voor een feestelijke korting!');
}
