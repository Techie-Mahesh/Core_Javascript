const counter = ()=>{
    var count = 0
    return{increment: function() {
        count++
        console.log(count)
    },
    decrement: function(){
        count--
        console.log(count)
    }}
}
var myCounter = counter()
myCounter.increment()
myCounter.increment()
myCounter.decrement()

function a(){
    console.log("a called"); 
}