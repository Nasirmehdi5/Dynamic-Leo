function Good(name) {
    console.log("Hey! " + name +" you are nice ")
    console.log("Hey! " + name +" how are you ")
    console.log("Hey! " + name +" I am from islamabad ")
    console.log("Hey! " + name +" Dynamic Leo is the best software house ")    
}
 Good("Nasirmehdi")
 Good("TanzeelMehdi")

//  without fucntion in every line change the namee
// console.log("Hey! Mehdi ")
// console.log("Hey! Mehdi how are you")
// console.log("Hey! Mehdi I am from islamabad")
// console.log("Hey! Mehdi Dynamic Leo is the best software house")

function Sum(a,b, c = 3) {
    // console.log(a+b)
    return a + b + c
}
result1 = Sum(18,7)
result2 = Sum(4,23)
result3 = Sum(6,5)
console.log("a + b = ", result1)
console.log("a + b = ", result2)
console.log("a + b = ", result3)

const funct1 = (n)=>{
    console.log(" I am a arrow fucntion", n )
}
 funct1(55);
 funct1(43);
 funct1(23);







