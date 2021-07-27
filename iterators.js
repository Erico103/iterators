const colors = ['yellow', 'blue', 'orange'];
console.log("oooooooooooo-Wile loop-ooooooooooooooooooo")
//while loop
while( colors<colors.length){
colors++;
}

console.log(colors);
console.log("oooooooooooo-for loop-ooooooooooooooooooo")

//for loop
for(i = 0; i < colors.length;i++){
console.log(colors[i])
}
console.log("ooooooooo-Foreach-oooooooooooooooooooooo")
colors.forEach(color=>(console.log(color)))



/*for loop neemt 2 regels en while 3
foEach alleen 1 forEach is makkelijk leesbaar en het gebruikt
een fat arrow. Foreach is makkelijk leesbaar omdat je meteen weet waar het in result
Met de for in kun je loopen door een object. Je bent aan het itereren alleen over op te sommen properties
*/ 

const object = {
    a:'car',
    b:'red',
    c:'blue',
    d:'house',
    e:'dog',
    f:'cat',
    g:'elephant',
    h:'giraffe',
    i:'cigarette'
};
console.log("ooooooooo-for...in-oooooooooooooooooooooo")
for(property in object){
    console.log(`${property}: ${object[property]}`)
}

for(color in colors){
    console.log(`${colors}`)
}

