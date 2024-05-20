export default async function handlePost(req,res) {
    return new Promise((resolve)=>{
        let body = "";

        req.on("data", (data) => {
        // console.log("data: " + data)
        body += data.toString();
        })

        req.on("end", (data) => {
            resolve(body)
        })
    })
}