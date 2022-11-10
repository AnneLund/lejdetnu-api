import executeQuery from "../../src/db";
import NextCors from 'nextjs-cors'
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllUsersById(req: NextApiRequest, res: NextApiResponse) {

    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccesStatus: 200,
    })

    if(req.method === "PUT") {
        const {id, title, description, image} = req.body
        if(!id){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`UPDATE products SET title = ${title}, description = ${description}, image = ${image} WHERE id = ${id}`)
res.status(201).json({message: "Data updated!"})
return;
    }

    if(req.method === "DELETE") {
        const {id} = req.body

        if(!id){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`DELETE FROM uproducts WHERE id = '${id}'`)
res.status(201).json({message: "Data deleted!"})
return;
    }

    if(req.method === "POST") {
        const {id, title, description, image} = req.body

        const product = await executeQuery(`INSERT INTO products(title, description, image) VALUES('${title}', '${description}', '${image}')`)
        res.status(201).json({message: "Data created!", product})
        return;
    }


if(req.method === "GET") {

const product = await executeQuery(`SELECT * FROM products`)
res.status(201).json({message: "Data fetch", product})
return;

} else{
    res.status(500).json({message: "Route not valid"})
}
}