import { NextApiRequest, NextApiResponse } from "next";
import executeQuery from "../../../src/db";

export default async function  getAllWishById(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === "GET") {
        const product = await executeQuery(`SELECT * FROM products WHERE id='${req.query.id}'`)
        res.status(201).json({product})
        console.log(product)
        return;
        }
        
        else{
            res.status(500).json({message: "Route not valid"})
        }
        
}