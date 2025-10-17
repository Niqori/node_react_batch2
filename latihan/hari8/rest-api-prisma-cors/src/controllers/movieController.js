const {PrismaClient} = require("../../generated/prisma")

const prisma = new PrismaClient()

const createMovie = async(req, res) => {
        
    let {title, year} = req.body
    try{
        const movies = await prisma.movies.create({
        data: {
            title,year,
        }
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
            message:" Movie has failed ",
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
    let {title,year} = req.body
    let {id}=req.params

    const movies = await prisma.movies.update({
        where: {
            id: Number(id),
         },
        data: {
        title,year
         },
})

    connectionPool.query(`UPDATE movies SET titles = '${title}',year = ${year} ,
        updated_at = NOW() WHERE id=${id}`,(err,data)=>{
            if (err) {
            console.error(err);
            return;
        }   
        res.json("Move has been updated")
    })
}

const deleteMovie = async(req, res) => {
    let { id } = req.params
    try{
    const movies = await prisma.movies.delete({
        where: {
        id: Number(id),
        },
    })
    return
    }
    catch(err){
    res.json({
        info: movies,
        message: "Movie has been deleted",
        status: "success"
    })
    }
}

module.exports = {createMovie,readMovie,readMovieById,updateMovie,deleteMovie}