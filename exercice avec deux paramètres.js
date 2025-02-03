

function sayHello(firstName, heure){

       
    if(heure >= 18)
        console.log(`Bonsoir ${firstName} !`);
     else if(heure < 18)
        console.log(`Bonjour ${firstName} !`)
    }

    sayHello("Beyonce",11);
    sayHello("Beyonce",18);
    sayHello("Beyonce",17);


