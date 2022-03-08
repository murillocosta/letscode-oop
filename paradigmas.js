console.log("=== Paradigmas ===");

//sintaxe literal (básica)
//implicito
const escola = "LET'S CODE"; //string
console.log(escola); 
console.log(escola, typeof escola, escola.constructor);

const desde = 2015;
console.log(desde, typeof desde, desde.constructor)

//sintaxe OOP (avançada)
//explicito
const school = new String("LET'S CODE");
console.log(school, typeof school, school.constructor);

const since = new Number(2015);
console.log(since, typeof since, since.constructor)


//API JavaScript
console.dir(String.prototype); //cadeia de protótipos - exibe todas as instruções possíveis

