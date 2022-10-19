const express = require("express");

const app = express();


function middleware(req, res, next) {
    console.log('Yeni bir istek geldi');
    next()
}

function middlewarePost(req, res, next) {
    console.log('post isteği geldi');
    next()
}



app.get("/hello",middleware , (req, res) => {
    res.send("Merhaba, GET isteği attınız")
});

app.post("/hello",middleware,middlewarePost , (req, res) => {
    res.send("Merhaba, POST isteği attınız")
})

app.put("/hello",middleware , (req, res) => {
    res.send("Merhaba, PUT isteği attınız")
})

app.delete("/hello",middleware ,  (req, res) => {
    res.send("Merhaba, DELETE isteği attınız")
})

app.listen(3000, () => {
    console.log("server is running")
})
