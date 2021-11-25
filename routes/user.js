import express from "express";
// import {client} from "../index.js";

import { genPassword,
  createUser,
  checkAvailUser
 } 
 from "../helper.js";

const router= express.Router();

router
.route("/signup")
.post( async(request, response) => {
    const {username,password}=request.body;
    
    const find= await checkAvailUser(username);
    console.log(find);
   if(find==null)
   {
    const hashPassword = await genPassword(password);
    // response.send(hashPassword);
    const userCreate = await createUser(username,hashPassword)
    console.log(userCreate);
    response.send(userCreate);

   }
   else{
     response.send("username available");
   }
   
  })

  

 
   
  
  

export const userRouter = router;
  
  //  sample code
    // router.delete("/movies/:id", async (request, response) => {
    //   const { id } = request.params;
    //   const movie = await deleteMovieByID(id);
    //   response.send(movie);
    //   });  
     