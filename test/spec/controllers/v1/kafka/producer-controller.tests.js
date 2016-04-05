
describe('ProducerController Tests', function() {

  var producerController;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    producerController = require('../../../../../app/controllers/v1/kafka/producer-controller');
  });

  describe('post()', function() {

    it('should be a function', function(done) {
      expect(producerController.post).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      producerController.post(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        producerController.post(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
