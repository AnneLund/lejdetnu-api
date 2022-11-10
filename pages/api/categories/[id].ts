import { NextApiRequest, NextApiResponse } from "next";
import executeQuery from "../../../src/db";

export default async function  getAllWishById(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === "GET") {
        const category = await executeQuery(`SELECT * FROM categories WHERE id='${req.query.id}'`)
        res.status(201).json({category})
        console.log(category)
        return;
        }
        
        else{
            res.status(500).json({message: "Route not valid"})
        }
        
}