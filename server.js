import { createServer } from "http";
import router from "./app/router.js"
// import path from "path";

let PORT = 3000

createServer((req,res)=> {
    router(req,res);
})
    .listen(PORT, () => console.log(`http://127.0.0.1:${PORT}/`))