import { readFile } from 'fs';
import path from 'path';

const __dirname = path.resolve()

const router = async (req, res) => {

    switch (req.method) {
        case "GET":
            console.log('GET');
                // strona views/index.html
                readFile(path.join(__dirname,'app/views','index.html'),(err,data)=>{
                    res.writeHead(200, {'Content-Type':'text/html'})
                    res.write(data)
                    res.end()
                    console.log(res);
                })
            break
        case "POST":
            break
    }
}
export default router