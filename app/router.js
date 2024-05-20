import { readFile } from 'fs';
import path from 'path';
import handlePost from './handlePost.js';

const __dirname = path.resolve()

const router = async (req, res) => {

    switch (req.method) {
        case "GET":
            switch(true){
                case req.url == "/":
                    // strona views/index.html
                    readFile(path.join(__dirname,'app/views','index.html'),(err,data)=>{
                    res.writeHead(200, {'Content-Type':'text/html'})
                    res.write(data)
                    res.end()
                    // console.log(res);
                })
                break;
                case req.url == "/api/tasks":
                    res.writeHead(200, {'Content-Type':'text/html'})
                    res.write("apit asks")
                    res.end()
                break
                case req.url.match(/\/api\/tasks\/([0-9]+)/)!=null:
                    res.writeHead(200, {'Content-Type':'text/html'})
                    res.write("apit asks 2")
                    res.end()    
                break
                default:
                    res.writeHead(200, {'Content-Type':'text/html'})
                    res.write("404")
                    res.end()
                break
            }
            break
        case "POST":
            switch (req.url) {
                case "/api/tasks":
                    console.log(req.url);
                    res.writeHead(200, {'Content-Type':'application/json'})
                    res.write(await handlePost(req,res))
                    res.end()                    
                    break;
                default:
                    res.writeHead(200, {'Content-Type':'application/json'})
                    res.write(await handlePost(req,res))
                    res.end()
                    break;
            }
            break
    }
}
export default router