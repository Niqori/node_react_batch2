const {PrismaClient} = require("../../generated/prisma")

const prisma = new PrismaClient()

const createMovie = async(req, res) => {
        
    let {title, year,categoryId} = req.body
    try{
        const movies = await prisma.movies.create({
        data: {
            title,year,categoryId
        },
        })

        res.json({
            info : movies,
            message : " Movie has been added",
            status : "success" 
        })
        return
    } catch(err){
        res.json({
            info:null,
            message:err.message,
            status :"failed"
        })
    }
}


const readMovie = async(req,res) =>{
    try{
        const movies=await prisma.movies.findMany()
        res.json({
            info:movies,
            message: "Movie sucessfulli fetch",
            status :"sucess"
        })
        return
    } catch(err){
        res.json({
            info :null,
            message: "Movie failed",
            status :"failed"
        })
    }
}

const readMovieById = async(req,res) =>{
 let {id} = req.params
    try{
    const movies = await prisma.movies.findUnique({
    where: {
        id: Number(id)
    }
    })

    if(movies){
        message="Movie Was Succesfully Fetch"
        stat="Success"
        status=200
    }else{
        message="Movie Was not Found"
        stat="Not Found"
        status=404
    }

    res.status(status).json({
        info: movies,
        message,
        status:stat
    })
    return
    }catch(err){
        res.json({
            info: movies,
            message: err.message,
            status: "error"
        })
    }
}

const updateMovie = async(req,res) =>
{
    try{
    let {title,year,categoryId} = req.body
    let {id}=req.params

    const movies = await prisma.movies.update({
        where: {
            id: Number(id),
         },
        data: {
        ...(title && { title }),
        ...(year && { year: Number(year) }),
        ...( categoryId && { categoryId }), 
         },
        });

    res.json({
        info: movies,
        message: "Movie has been updated",
        status: "success"
    })
    } catch (err) {

        res.status(500).json({
            info: null,
            message: err.message,
            status: "error"
        })
    }
}

const deleteMovie = async(req, res) => {
    let { id } = req.params
    try{
    const movies = await prisma.movies.delete({
        where: {
        id: Number(id),
        },
    })
    res.json({
        info: movies,
        message: "Movie has been deleted",
        status: "success"
    })
    }
    catch(err){
    res.json({
        info: null,
        message: "movie failed to delete",
        status: "failed"
    })
    }
}

module.exports = {createMovie,readMovie,readMovieById,updateMovie,deleteMovie}