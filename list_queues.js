var AWS = require('aws-sdk');

AWS.config.update({region: 'eu-north-1'});

var sqs = new AWS.SQS({apiVersion: '2012-11-05'});
sqs.listQueues({}, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.QueueUrls);
});
