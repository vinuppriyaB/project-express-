import {createConnection} from "./index.js";
import {client} from "./index.js";

 async function getMovieById(id) {
    // const client = await createConnection();
    const result = await client
        .db("B27rwd")
        .collection("movies")
        .findOne({ id: id});
    return result;
}
async function getMovieByfilter(filter) {
    const client = await createConnection();
    const movie = await client
        .db("B27rwd")
        .collection("movies")
        .find(filter)
        .toArray();
    return movie;
}

async function createMovie(data) {
    // const client = await createConnection();
    console.log(data);
    const movie = await client
        .db("B27rwd")
        .collection("movies")
        .insertMany(data);
    console.log(movie);
    return movie;
}



async function editMovieByName(id, request) {
    // const client = await createConnection();
    const movie = await client
        .db("B27rwd")
        .collection("movies")
        .updateOne({ id:id }, { $set: request.body });
    console.log(movie);
    return movie;
}

async function deleteAllMovie(filter) {
    // const client = await createConnection();
    const movie = await client
        .db("B27rwd")
        .collection("movies")
        .delete(filter);
    return movie;
}

async function deleteMovieByID(id) {
    // const client = await createConnection();
    const movie = await client
        .db("B27rwd")
        .collection("movies")
        .deleteOne({ id: id });
    console.log(movie);
    return movie;
}




export{
    getMovieById,
    getMovieByfilter,
    createMovie,
    editMovieByName,
    deleteAllMovie,
    deleteMovieByID

};