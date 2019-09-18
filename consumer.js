const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
    queueUrl: 'https://sqs.eu-north-1.amazonaws.com/442563104908/orders',
    handleMessage: async (message) => {
      console.log(message);
    }
  });
  
  app.on('error', (err) => {
    console.error(err.message);
  });
  
  app.on('processing_error', (err) => {
    console.error(err.message);
  });
  
  app.start();