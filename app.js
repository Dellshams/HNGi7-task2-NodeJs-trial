const express = require('express')
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const { spawn } = require('child_process')
const debug = require('debug')('app: py-node')
const cacheMiddleware = require('./cacheMiddleware')

const app = express()

const port = 4000

app.set('views', './views');
app.set('view engine', 'ejs');

const readdir = promisify(fs.readdir);

app.get('/', (req, res) => {
   (async function doStuff() {
      const dir = path.join(__dirname + '/' + 'scripts');
      const files = await readdir(dir)
      let dat = [];
      let str, py;
      for (let file of files) {
         try {
            if (path.extname(file) === '.py') {
               py = spawn(
                  'python',
                  ['-u', path.join(__dirname, 'scripts', file),
                     '--foo', 'some value']);
            } else if (path.extname(file) === '.js') {
               py = spawn('node', [path.join(__dirname, 'scripts', file)]);
            } else if (path.extname(file) === '.php') {
               py = spawn('php', [path.join(__dirname, 'scripts', file)]);
            } else {
               console.log(`${path.basename(file)} file type with ext ${path.extname(file)} is not supported`)
            }
            py.stdout.on('data', function (data) {
               //console.log('Pipe data from python file ...');
               str = data.toString('utf8');
               mes = str.trim();
               const res = mes.split(' ');
               let language = ''
               if (res.length === 20){
                   language = `${res[15]}`
               }else{
                  language = `${res[14]}`
              }

               let status;
               if (language == 'javascript' || language == 'JavaScript'|| language == 'Javascript' || language == 'javaScript'
               || language == 'python'|| language == 'Python' || language == 'Python3' || language == 'php' || language == 'PHP' || language == 'nodejs'
               || language == 'NodeJs' || language == 'nodeJs' || language == 'Golang') {
                  status = 'pass'
               } else {
                  status = 'fail'
               }
               if (res.length === 20){
                  dat.push({
                     file: path.basename(file),
                     output: str,
                     name: `${res[4]} ${res[5]} ${res[6]}`,
                     id: `${res[10]}`,
                     email: `${res[13]}`,
                     language: `${res[15]}`,
                     status: status
                  })
               }
               if (res.length === 19){
                  dat.push({
                     file: path.basename(file),
                     output: str,
                     name: `${res[4]} ${res[5]}`,
                     id: `${res[9]}`,
                     email: `${res[12]}`,
                     language: `${res[14]}`,
                     status: status
                  })
               }
            });
            py.stderr.on('data', (code) => {
               console.log(`child process have an error with code ${code}`);
            })
            py.on('exit', () => {
               //console.log('foobar exiting: ', dat)
            })
         } catch (err) {
            console.log(`${err}`)
         }
      }
      py.stdout.on('end', () => {
         debug(dat[3].output)
         //console.log('foobar ending: ', dat)
         let pass = 0
         let fail = 0
         for (let i of dat) {
            if (i.status === 'pass'){
               pass = pass + 1
            }
            if (i.status === 'fail'){
               fail = fail+ 1
            }
         }

         res.render('index', {da: dat, pa: pass, fa: fail})
      })
   })();
});

app.listen(port, () => console.log(`App listening on port ${port}!`))