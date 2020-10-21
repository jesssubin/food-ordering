require('dotenv').config({path: "../twilio.env"});
const sendTexttoCustomer = (body, to) => {

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const from = process.env.fromNumber;

const client = require('twilio')(accountSid, authToken);
return client.messages.create({body, from, to})};


const sendTextToAdmin = (order_id) => {

  const adminNumber = process.env.adminNumber

  let msg = `You have received an order!
  Please check the admin side and confirm the order.
  Order id is: ${order_id}
  `;

  sendTexttoCustomer(msg, adminNumber)

}

module.exports = {
  sendTexttoCustomer,
  sendTextToAdmin
};

