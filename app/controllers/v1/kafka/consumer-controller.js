var kafka = require('kafka')

function ConsumerController() {
}

function get(req, res, next) {

    var kafka = require('kafka-node'),
        Consumer = kafka.Consumer,
        client = new kafka.Client("10.1.0.178:2181,10.1.0.200:2181,10.1.1.49:2181/kafka", "client-01", { sessionTimeout: 3000 }),
        consumer = new Consumer(
            client,
            [
                { topic: 't0', partition: 0 }
            ],
            {
                autoCommit: false
            }
            );

    consumer.on('message', function (message) {
        console.log(message);
    });
    
     res.status(200).json({ status: "Ok" });
}

ConsumerController.prototype = {
    get: get
};

var consumerController = new ConsumerController();

module.exports = consumerController;
