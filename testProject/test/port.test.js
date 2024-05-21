import http from 'http';
import { strict as assert } from 'assert';
import { describe, it, before, after } from 'mocha';

describe('HTTP Server Test', function () {
    let server;
    let port = 14840;
    let messageToSend = Math.random().toString(36).substring(7); // Generate a random string

    before((done) => {
        server = http.createServer((req, res) => {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString(); // Convert Buffer to string
            });
            req.on('end', () => {
                res.end(body); // Echo back whatever was received
                assert.strictEqual(body, messageToSend, 'The message received by the server should match the sent message.');
            });
        }).listen(port, () => {
            port = server.address().port;
            done();
        });
    });

    after((done) => {
        // Close the server after the tests
        server.close(done);
    });

    it('should send a message to the server and get the same message back', (done) => {
        // Options to define host, port and method for HTTP request
        const options = {
            hostname: 'localhost',
            port: port,
            path: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                'Content-Length': Buffer.byteLength(messageToSend)
            }
        };

        const req = http.request(options, (res) => {
            let responseBody = '';
            res.on('data', (chunk) => {
                responseBody += chunk.toString();
            });
            res.on('end', () => {
                assert.strictEqual(responseBody, messageToSend, 'The message received back from the server should match the sent message.');
                done();
            });
        });

        req.on('error', (error) => {
            done(error);
        });

        // Write the random message to request body
        req.write(messageToSend);
        req.end();
    });
});