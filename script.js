// let a = 5;
// a= a*5;

// try {
//     document.querySelector(".test").innerHTML =a;
// } catch (error) {
//     alert("mojet bit oshibka")
//     console.log("1");
    
// }
// finally{
//     console.log("proqa rabotayt")
// }

// function t1(){
//     console.log("hello");
// }


// console.log(a);

// window.addEventListener("storage",function(e){
//     console.log("change");
// })

// localStorage.setItem("data",5)
// localStorage.getItem("data")

// console.log(localStorage.getItem("data"));

// let a =  [3,4,5]

// localStorage.setItem("a",a)

// console.log(localStorage.getItem("a")[1]);

// let b =localStorage.getItem("a")
// console.log(b[0]);

// console.log(typeof b);


// AJAX

// FETCHH

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange=function(){
//     if(this.readyState==4&& this.status==200){
//         callbackFunction(this.responseText)
//     }
// }
// xhttp.open("http://getpost.itgid.info/index2.php")
// xhttp.send();

// function callbackFunction(data){
// console.log(data);
// }




// fetch ("http://getpost.itgid.info/index2.php")
// .then(data=>{
//     console.log(data);
    
    
// })
// .then(data =>){
//     console.log(data);
// }
 const requestURL = "https://jsonplaceholder.typicode.com/users"

// const xhr = new XMLHttpRequest();

// xhr.open("GET",requestURL)

// xhr.responseType ="json"
// xhr.onload=()=>{
//     if(xhr.response>=400){
//         console.error(xhr.response);
//     }else
//     {
//         console.log(xhr.response);
//     }
//     console.log(xhr.response);

// }

// xhr.onerror=()=>{
//     console.log(xhr.response);
// }
// xhr.send();

function sendRequest(method,url,body = null){
    return new Promise((resolve, reject) => {
        

const xhr = new XMLHttpRequest();

xhr.open(method,url)

xhr.responseType ="json"

xhr.onload=()=>{
    if(xhr.response>=400){
        reject(xhr.response);
    }else
    {
        resolve(xhr.response);
    }
    console.log(xhr.response);

}

xhr.onerror=()=>{
    console.log(xhr.response);
}
xhr.send(JSON.stringify(body));
})}

// sendRequest("GET",requestURL)
// .then(data=>console.log(data))
// .catch(err=>console.log(err))

 sendRequest("POST",requestURL,{
     name:"vlada",
     age: 26
 }) 
 .then(data=>console.log(data))
.catch(err=>console.log(err))
