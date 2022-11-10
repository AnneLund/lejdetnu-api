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
        const {id, category, description, image} = req.body
  
await executeQuery(`UPDATE products SET categories = ${category}, description = ${description}, image = ${image} WHERE id = ${id}`)
res.status(201).json({message: "Data updated!"})
return;
    }

    if(req.method === "DELETE") {
        const {id} = req.body

        if(!id){
            res.status(422).json({message: "Invalid data"})
            return;
        }
await executeQuery(`DELETE FROM categories WHERE id = '${id}'`)
res.status(201).json({message: "Data deleted!"})
return;
    }

    if(req.method === "POST") {
        const {id, category, description, image} = req.body

        const categories = await executeQuery(`INSERT INTO categories(category, description, image) VALUES('${category}', '${description}', '${image}')`)
        res.status(201).json({message: "Data created!", categories})
        return;
    }


if(req.method === "GET") {

const categories = await executeQuery(`SELECT * FROM categories`)
res.status(201).json({message: "Data fetch", categories})
return;

} else{
    res.status(500).json({message: "Route not valid"})
}
}