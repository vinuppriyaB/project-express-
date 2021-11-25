import express from "express";
// import {client} from "../index.js";

import { genPassword,
 } 
 from "../helper.js";

  const router= express.Router();

router
.route("/signup")
.post( async(request, response) => {
    const {username,password}=request.body;
    const hashPassword = await genPassword(password);
    response.send(hashPassword);
  })

  
 in 
 
   
  
  
  
    export const userRouter=router;
  
  //  sample code
    // router.delete("/movies/:id", async (request, response) => {
    //   const { id } = request.params;
    //   const movie = await deleteMovieByID(id);
    //   response.send(movie);
    //   });  
     