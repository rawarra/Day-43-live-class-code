const EventEmitter = require("events");

// chat Application (zoho, google)
const chatEvent = new EventEmitter();

chatEvent.on('newMessage', (user, message)=>{
    console.log(`New message from ${user} :${message}` ); 
});

chatEvent.emit('newMessage', 'Rajesh', 'check the note');

chatEvent.emit('newMessage', 'kumar', 'Ok');

chatEvent.emit('newMessage', 'rajesh', 'note it'); 

chatEvent.emit('newMessage', 'kumar', 'now learning'); 

// Payment gateWay (Paypal, Razorpay, UPI)

const paymentEvent = new EventEmitter();

paymentEvent.once('paymentProcess', (amount)=>{
console.log(`payment of ${amount}, processed Successful`);
});

console.log("user  click the pay button");
paymentEvent.emit('paymentProcess', 7000);

console.log("user click the button one more time");
paymentEvent.emit('paymentProcess', 8000);
