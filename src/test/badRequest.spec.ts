import BadRequest from '../../src/shared/errors/BadRequest';

describe('BadRequest', () => {
  it('should message create', () => {
    const message = 'Bad Request data is incorrect';
    const error = new BadRequest(message);
    expect(error.message).toBe(message);
  });

  it('should status code is 400', () => {
    const message = 'Bad Request data is incorrect';
    const error = new BadRequest(message);
    expect(error.status).toBe(400);
  });
});
