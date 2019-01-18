import * as express from 'express';
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World!\n')
})

// Export server for testing.
const server = app.listen(7007);

export default server;
