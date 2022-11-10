import executeQuery from "../../src/db";
import NextCors from 'nextjs-cors'
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAllUsersById(req: NextApiRequest, res: NextApiResponse) {

    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccesStatus: 200,
    })

//     if(req.method === "PUT") {
//         const {roles} = req.body
    
// await executeQuery(`UPDATE users SET username = '${username}' WHERE username = '${username}'`)
// res.status(201).json({message: "Data updated!"})
// return;
//     }

//     if(req.method === "DELETE") {
//         const {id} = req.body
//         if(!id){
//             res.status(422).json({message: "Invalid data"})
//             return;
//         }

// await executeQuery(`DELETE FROM users WHERE id = '${id}'`)
// res.status(201).json({message: "Data deleted!"})
// return;
//     }

    if(req.method === "POST") {
        const {role} = req.body

        const roles = await executeQuery(`INSERT INTO roles(roles) VALUES('${role}')`)
        res.status(201).json({message: "Data created!", roles})
        return;
    }


if(req.method === "GET") {

const role = await executeQuery(`SELECT * FROM roles`)
res.status(201).json({message: "Data fetch", role})
return;

} else{
    res.status(500).json({message: "Route not valid"})
}
}