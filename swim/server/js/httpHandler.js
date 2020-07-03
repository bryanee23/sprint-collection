const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const url = require('url');
const messageQueue = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////


module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = () => { }) => {
  //console.log('Serving request type ' + req.method + ' for url ' + req.url);

  res.writeHead(200, headers);
  let path = url.parse(req.url).pathname;
  let commands = ['right', 'left', 'up', 'down'];


  switch (path) {
    case '/command':

      res.write('left');
      res.end();
      break;

    case '/random':

      let randomCommand = commands[Math.floor(Math.random() * commands.length)];
      res.write(randomCommand);
      res.end();
      break;

    case '/get_command':

      let command = messageQueue.dequeue();
      if (command) {
        res.write(command);
      }
      res.end();
      break;

    case '/get_background':

      fs.readFile(this.backgroundImageFile, (err, image) => {
        if (image === undefined) {
          res.end('404 Not Found: Try again bucko')
        } else {
          var file = multipart.getFile(image);
          //let buffer = new Buffer(file.data, 'base64');
          res.end(image);
        }
      });
      break;

    case '/upload_background':


      let bufferArr = [];

      req.on('data', chunk => {
        bufferArr.push(chunk);
      })

      req.on('end', () => {
        let concatBuffer = Buffer.concat(bufferArr);


        // let buff = new Buffer(buffer, 'base64');
        let file = multipart.getFile(concatBuffer);
        console.log(file);
        let imageBuff = new Buffer(file.data, 'base64');
        fs.writeFile(this.backgroundImageFile, imageBuff);

        console.log('ENDED TEST')
      })
      res.end();

      break;

    default:

      res.end();
      break;

  }


  next(); // invoke next() at the end of a request to help with testing!
};
