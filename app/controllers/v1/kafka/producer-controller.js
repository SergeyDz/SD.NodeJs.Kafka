function ProducerController() {
}

function post(req, res, next) {
    var messages = new Array();

    for (i = 0; i < 10; i++) {
        messages.push({ name: "Client #" + i, Code: i, Description: "test kafka record"});
    }

    var kafka = require('kafka-node'),
    HighLevelProducer = kafka.HighLevelProducer,
    client = new kafka.Client('10.1.1.231:2181/kafka', 'client-01',  { sessionTimeout: 5000 }),
    producer = new HighLevelProducer(client),
    payloads = [
        { topic: 't0', messages: 'hi' }
    ];
producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log(data);
    });
});
}

ProducerController.prototype = {
    post: post
};

var producerController = new ProducerController();

module.exports = producerController;
