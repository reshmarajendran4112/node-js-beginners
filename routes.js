const fs = require('fs');

const requestHandler = (req,res)=>{

    const url = req.url;
    const method = req.method;

    if(url==='/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>');
        res.write('<head><title> Form </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url==='/message' && method === 'POST'){

        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })

        req.on('end', ()=>{
            console.log("End Event received");
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=');
            fs.writeFileSync("hello.txt",message[0]);
            fs.writeFileSync('hello.text','Dummy node js');
            console.log("Filewrite completed");
        })

        
        res.setHeader('Location','/');
        res.statusCode = 302;
        return res.end();

    }

   res.setHeader('Content-type','text/html');
   res.write('<html>');
   res.write('<head><title>Node js</title></head>');
   res.write('<body><h1>Hello Welcome to Node js</h1></body>');
   res.write('</html>');
   res.end();

};

// module.exports = {
//     handler:requestHandler,
//     someText:'Printing some text'
// };

// exports.handler = requestHandler;
// exports.someText = 'Printing some text';

module.exports.handler = requestHandler;
module.exports.someText = 'Printing some text';