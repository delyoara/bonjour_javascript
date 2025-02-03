
//

let message = "Bonjour !";
let firstName = "Beyonce";

message = `Bonjour ${firstName} !`

console.log(message);


//ou console.log(message.slice(0, 8) + `${firstName}` + message.slice(8))


function sayHello(firstName){
//let firstName = "Beyonce"

console.log(`Bonjour ${firstName} !`);
}
sayHello("Beyonce");




