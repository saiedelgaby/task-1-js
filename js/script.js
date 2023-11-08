// var x = 5
// var y = 8
// var z = x + y
// console.log(z)
//document.getElementById("btn1").innerHTML = "saied"
// document.getElementById("btn1").onclick = function() {
//         document.getElementById("div1").innerHTML = "SAIED"
//  }
// alert("حاسب ي وجهه")
// confirm("هتسجل فالويبسايت ولا تغور فداهيه")
// prompt("what is your GPA ?")

// var allProducts = document.querySelectorAll(".products div li")
// var div1 = document.querySelector("#div1")
// var btn1 = document.querySelector("#showPrice")
// var totalPrice = 0

// allProducts.forEach(function (item) {
//     item.onclick = function (){
//         div1.innerHTML += item.textContent +" + "


//         if(div1.innerHTML != ""){
//             btn1.style.display = "block"
//             btn1.style.width = "200px"
//             btn1.style.height = "50px"
//             btn1.style.backgroundColor = "gray"
//             btn1.style.color = "white"
//             btn1.style.fontSize = "25px"

//         }
//         // if(ul.innerHTML){
//         // ul.style.color = "white"
//         // }
//     }
// })
var allProducts = document.querySelectorAll(".products li")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#showPrice")
var totalPrice = 0

allProducts.forEach(function (item) {
    item.onclick = function (){
        totalPrice +=  +(item.getAttribute("price"))
        div1.innerHTML += item.textContent + " + "

        if (div1.innerHTML != ""){
            btn1.style.display = "block"
            btn1.style.width = "200px"
            btn1.style.height = "50px"
            btn1.style.backgroundColor = "gray"
            btn1.style.color = "white"
            btn1.style.fontSize = "25px"
        }

    }
})

btn1.onclick = function (){
    console.log(totalPrice)
}
