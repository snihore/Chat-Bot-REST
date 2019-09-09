var express = require('express');
var bodyParser = require('body-parser');
var twilio = require('twilio');

const {keyPairMessages} = require('./chat-bot');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.send('index.html');
});

app.post('/send-auto-message', (req, res)=>{
    // var msg = `Hello, I am sourabh nihore's bot ...`;
    var SmsStatus = req.body.SmsStatus;
    var From = req.body.From;
    var Body = req.body.Body;

    var msg = keyPairMessages(Body);

    const MessagingResponse = twilio.twiml.MessagingResponse;


    const response = new MessagingResponse();
    const message = response.message();
    message.body(msg);
    response.redirect('https://demo.twilio.com/welcome/sms/');

    
    
    res.send(response.toString());
});


app.listen(port, ()=>{
    console.log(`Server is listen on port ${port}`);
});

/**
 * 
 * const accountSid = 'ACd013617d074b22d60244b011be55b5d6'; 
const authToken = 'd7c02baddadbcbc12ae13c97b8c89f99'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Your appointment is coming up on July 21 at 3PM', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+917024448945' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();

      //////////////////////////////////////////////////////////////

      const accountSid = 'ACd013617d074b22d60244b011be55b5d6'; 
const authToken = 'd7c02baddadbcbc12ae13c97b8c89f99'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: 'Hello! This is an editable text message. You are free to change it and write whatever you like.', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+917024448945' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
 * 
 /////////////////////////////////////////


 * 
 * SmsStatus
 * Body
 * From

 */
