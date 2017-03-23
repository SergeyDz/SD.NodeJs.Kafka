function ConsumerController() {
}

function get(req, res, next) {

    var kafka = require('kafka-node'),
        Consumer = kafka.Consumer,
        client = new kafka.Client("10.1.1.231:2181,10.1.1.232:2181,10.1.1.233:2181/kafka", "client-02", { sessionTimeout: 5000 }),
        consumer = new Consumer(
            client,
            [
                { topic: 'entities', partition: 0 }
            ],
            {
                autoCommit: true
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
