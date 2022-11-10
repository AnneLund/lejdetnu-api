import { NextApiRequest, NextApiResponse } from "next";
import executeQuery from "../../../src/db";

export default async function  getAllWishById(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === "GET") {
        const roles = await executeQuery(`SELECT * FROM roles WHERE id='${req.query.id}'`)
        res.status(201).json({roles})
        console.log(roles)
        return;
        }
        
        else{
            res.status(500).json({message: "Route not valid"})
        }
        
}