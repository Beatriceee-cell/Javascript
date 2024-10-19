var firstName = "Fisayomi"
var surName = "Akapo"
var course = "Web Development"
var school = "GMC"
var dreamSalary = "$260,000"
var jobTitle = "Web Developer"

var sentence = "My name is " +firstName + surName + "I am currently studying " +course + " at " +school + " I would like to be a " +jobTitle +"and earn " +dreamSalary +"yearly"
console.log(sentence)

var president = "Tinubu"
var nickname = "T-pain"
var description = "amazing"
var wishes = "long life and prosperity"

var sentence = "My president's name is " +president  + " but we call him " +nickname +" he is " +description + " and I wish him nothing but " +wishes
console.log(sentence)

// Introduction To Arrays
var shoppingCart = ["milo", "sardine", "water", "bread", "rice"]
var array2 = [undefined, null, 25, false, "testing"]

// Array Methods
// .pop(), .push(), .shift(), unshift()
shoppingCart.pop()
console.log(shoppingCart)
shoppingCart.pop()
console.log(shoppingCart)
shoppingCart.push("turkey, fish, egg, meat")
console.log(shoppingCart)

shoppingCart.shift()
console.log(shoppingCart)

shoppingCart.unshift("catfish", "pork")
console.log(shoppingCart)

// Accessing Arrays
console.log(shoppingCart.length)
console.log(shoppingCart[2])

var WebDevelopmentClass = ["Korede", "Mohammed", "Mumbarak", "Fiyin", "Yunis", "Moridiyat", "Rosheed", "Fola", "Badmus", "Eunice"]
console.log(WebDevelopmentClass)

WebDevelopmentClass.unshift("Lee")
console.log(WebDevelopmentClass)
WebDevelopmentClass.shift
console.log(WebDevelopmentClass)
console.log(WebDevelopmentClass[4])

WebDevelopmentClass[5] = "temitope"
console.log(WebDevelopmentClass)

// Conditional Statement
var accountBalance = 50001
if(accountBalance <= 50000){
    console.log("omo I don broke")
}
else{
    console.log("omo I get money pass Tinubu")
}
var student = false
if(student === true){
    console.log("free ticket")
}
else{
    console.log("Please pay your money")
}
var customerAge = 18
if(customerAge >= 1 && customerAge <= 13){
    console.log("Free Tickets")
}
else if(customerAge >= 13 && customerAge <= 20){
    console.log("Your bill is 5000")
}
else if(customerAge >= 21 && customerAge <= 30){
    console.log("Your bill is 10000")
}
else{
    console.log("Your ticket is 20000")
}

var customer = "students"
if(customer === "students"){
    console.log("Your bill is 2000")
}
else if (customer === "civilServants"){
    console.log("Your bill is 5000")
}
else if( customer=== "developer"){
    console.log("Your bill is 10000")
}
else if(customer === "yahooBoys"){
    console.log("Your bill is 1000000")
}
else if( customer === "politician"){
    console.log("Your bill is 5000000")
}
else{
    console.log("Your bill is 10000000")
}
    