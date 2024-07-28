const express=require("express")
const http=require("http");
const app=express();

const path = require("path");
const socketio=require("socket.io");
 const server=http.createServer(app)
 io=socketio(server)
 app.set("view engine", "ejs")
 app.use(express.static(path.join(__dirname, 'public')));
 io.on("connection",(socket)=>{
    socket.on("send-location",(data)=>{
        io.emit("receive-location",{id:socket.id, ...data})
    })
       console.log("connnected")
       socket.on("disconnecte",()=>{
         io.emit("user-disconected",socket.id)
       })
 });
app.get("/",(req,res)=>{
    res.render("index.ejs")
})
server.listen(3000,()=>{
    console.log("server is running on 30000")
})