const AWS = require('aws-sdk');

AWS.config.update({region: 'eu-north-1'});

const sqs = new AWS.SQS({apiVersion: '2012-11-05'});

const receiveDetails = {
    AttributeNames: [
        "SentTimestamp"
     ],
     MaxNumberOfMessages: 10,
     MessageAttributeNames: [
        "All"
     ],
     QueueUrl: "https://sqs.eu-north-1.amazonaws.com/442563104908/orders",
     VisibilityTimeout: 20,
     WaitTimeSeconds: 0
}

sqs.receiveMessage(receiveDetails, (err, data) => {
    if (err) {
        console.log("Error!", err);
        return;
    }
    console.log("Order received!", data);
});

