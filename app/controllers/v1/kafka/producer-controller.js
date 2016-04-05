function ProducerController() {
}

function post(req, res, next) {
    var kafka = require('kafka-node'),
        Producer = kafka.Producer,
        KeyedMessage = kafka.KeyedMessage,
        client = new kafka.Client("10.1.0.178:2181,10.1.0.200:2181,10.1.1.49:2181/kafka", "client-01", { sessionTimeout: 3000 }),
        producer = new Producer(client),
        km = new KeyedMessage('key', 'message'),
        payloads = [
            { topic: 't0', messages: 'hello world', partition: 0 }
        ];
    producer.on('ready', function () {
        producer.send(payloads, function (err, data) {
            console.log(data);
            res.status(200).json({ success: data });
        });
    });

    producer.on('error', function (err) { res.status(500).json({ error: err }); })
}

ProducerController.prototype = {
    post: post
};

var producerController = new ProducerController();

module.exports = producerController;
