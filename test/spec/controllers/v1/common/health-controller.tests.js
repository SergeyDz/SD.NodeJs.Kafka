
describe('HealthController Tests', function() {

  var healthController;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    healthController = require('../../../../../app/controllers/v1/common/health-controller');
  });

  describe('get()', function() {

    it('should be a function', function(done) {
      expect(healthController.get).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      healthController.get(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        healthController.get(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
