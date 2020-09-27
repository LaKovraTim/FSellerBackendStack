const mockery = require('mockery');
const { INTERNAL_SERVER_ERROR } = require('../enums/error-codes.enum');
const expect = require('chai').expect;

describe('Generic Exception', () => {

  it('Should be instance', () => {
    const GenericException = require('./generic.exception');
    try {
      throw new GenericException(INTERNAL_SERVER_ERROR)
    } catch(e) {
      expect(e.ex).to.be.an('object');
    }
  });

  it('Should be have log module and method with null values', () => {
    const GenericException = require('./generic.exception');
    try {
      throw new GenericException(INTERNAL_SERVER_ERROR, 'some error')
    } catch(e) {
      expect(e.log.module).to.be.a('null')
      expect(e.log.method).to.be.a('null')
    }
  });

  it('Should be have message attribute with default wildcard string', () => {
    const GenericException = require('./generic.exception');
    try {
      throw new GenericException(INTERNAL_SERVER_ERROR)
    } catch(e) {
      expect(e.message).to.be.eq('[%s]')
    }
  });
})
