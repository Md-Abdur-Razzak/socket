const express = require('express');
var cors = require("cors");
// var sdk = require("emergepay-sdk");
const app = express()
const port = process.env.PORT || 3002
const http = require('http');
const socketIo = require('socket.io');
const { log } = require('console');
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST","DELETE","PUT","UPDATE"]
    }
  });
// midleWare
app.use(express.json());
app.use(cors());
// K1Ozio2I1IS7pP0b
// sockit


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://sockit:K1Ozio2I1IS7pP0b@cluster0.wgy9amh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   
    await client.connect();
   const registrationUser = client.db("sockit").collection("userMessages")
   const onToOnMessages = client.db("sockit").collection("onToOnMessages")

app.post("/registrationUser",async(req,res)=>{
  const data = req.body
  const sendDataToDatabase = await registrationUser.insertOne(data)
  res.send(sendDataToDatabase)
})



app.get("/registrationUser",async(req,res)=>{

  const sendDataToDatabase = await registrationUser.find().toArray()
  res.send(sendDataToDatabase)
})

app.get("/registrationUser/:id",async(req,res)=>{
const id = req.params.id
  const query = {_id:new ObjectId(id)}
  const sendDataToDatabase = await registrationUser.findOne(query)

  res.send(sendDataToDatabase)
})

app.put("/updateQuntity",async(req,res)=>{
const reciver = req?.body?.reciver
const counter = req?.body?.counter
if (reciver && counter) {
  const findUser = {email : reciver }
const option = {upsert:true}
  const query = {
    $set:{
      count:counter
    }
  }
  const result = await registrationUser.updateOne(findUser,query,option)
 
  res.send(result)
}

})







io.on('connection', socket => {

  socket.on('disconnect', () => {
   
  });

  socket.on('sendMessage', async (messageInfo, receiverEmail) => {

      //messageBuffer.push(messageInfo)
 
      await socket.broadcast.emit(receiverEmail, messageInfo);
     await onToOnMessages.insertOne(messageInfo);

  });
});



// --------------------user specifi message geting---------------
app.get("/userGetMessages",async(req,res)=>{
  const sendEmail = req.query.sender
  const reciverEmail = req.query.reciver
    const query = {
      $or:[
        {"sender":sendEmail,"reciver":reciverEmail},
        {"reciver":sendEmail,"sender":reciverEmail}
      ]
    }
    const sendDataToClient = await onToOnMessages.find(query).toArray()

    res.send(sendDataToClient)
  })
  


 


//   app.get('/messages', async (req, res) => {
//     //console.log(req.query.m, req.query.f)
//     const query = {
//         $or: [
//             { 'sender.email': req.query.m, 'receiver.email': req.query.f },
//             { 'receiver.email': req.query.m, 'sender.email': req.query.f }
//         ]
//     }
//     const options = {
//         // Sort returned documents in ascending order by title (A->Z)
//         sort: { time: 1 },
//     };
//     const result = await message.find(query, options).toArray();
//     res.send(result)
// })





    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



// ------------good code--------------------

// io.on("connection", (socket) => {
//   console.log(`socket connected with ${socket.id}`);

//   //=======Messaging Feature Here ======//
//   socket.on("join_room", (chatId) => {
//     socket.join(chatId);
//     console.log(chatId);
//   });

//   socket.on("send_message", (data) => {

//     socket.to(data.chatId).emit("receive_message", data);
//     socket.broadcast.emit(`${data.to}`, data);
//     console.log(data);
//   });

//   socket.on("disconnect", (data) => {
//     console.log(`user disconnected successfully ${socket.id}`);
//   });
// });

























// io.on('connection', (socket) => {
//     console.log('A client connected');
//     socket.on("Room",(data)=>{
//       socket.join(data?.id)
//       socket.emit("user",data)
     
//     })
//     socket.on("send_message",(data)=>{
//       io.to(data?.id).emit("message",data)

     
//     })
//     // socket.join("romm")
//     // let roomSize = io.sockets.adapter.rooms.get("romm").size;
//     // io.sockets.in("romm").emit("raju",`Sead Message form Razzak islam My Name is Raju isalm` + roomSize)
//     // console.log(roomSize);
  
//     socket.on('disconnect', () => {
//       console.log('A client disconnected');
//     });
//   });

app.get("/",(req,res)=>{
    res.send("connect Browsers")
})

server.listen(port, () => {
    console.log(`Server is running on port `);
});

