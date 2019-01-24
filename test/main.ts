import * as request from 'supertest';
import { expect } from 'chai';

import app from '../src/main';

after(function(done: any){
  app.close(done)
})


describe('GET / - a simple api endpoint', () => {

  it('Hello API Request', async () => {
    const result = await request(app).get('/');
    expect(result.text).to.equal('Hello World!\n');
  });

})
