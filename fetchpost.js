const requestURL = "https://jsonplaceholder.typicode.com/users"

function sendRequest (method,url,body=null){
    const headers = {
        "content-type":"aplication/json"
    }

    return fetch(url,{
        method:method,
        body:JSON.stringify(body),
        headers:headers
    }).then(response=>{
        if(response.status >=400){
            return response.json()
        }
        return response.json().then(console.error())
    })
}



const body = {
    name: "denni",
    ad: 23
}

sendRequest("POST",requestURL,body)
.then(data=>console.log(data))
.catch(err=>console.log(err))