const AWS = require('aws-sdk');
const uuid = require('uuid');

AWS.config.update({region: 'eu-north-1'});

const createMessage = (message) => ({
    DelaySeconds: 10,
    MessageAttributes: {
        
    },
    MessageBody: JSON.stringify(message),
    QueueUrl: "https://sqs.eu-north-1.amazonaws.com/442563104908/orders"
});

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});
const message = createMessage({
    orderId: uuid.v1(),
    items: [{
        productId: "1"
    }]
});

sqs.sendMessage(message, (err, data) => {
    if (err) {
        console.log("Error!", err);
        return;
    }
    console.log("Success!", data);
});

