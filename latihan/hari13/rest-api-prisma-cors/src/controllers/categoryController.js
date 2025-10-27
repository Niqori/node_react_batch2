const { PrismaClient } = require("../../generated/prisma")


const prisma = new PrismaClient();

const createCategory = async(req, res) => {
    let{name} = req.body
    try{
        const category = await prisma.categories.create({
            data: {
                name
            }
        })
        res.json({
            info: category,
            message: "Category Name's has been added",
            status: "success"
        })
        return
    }catch(err){
        res.json({
            info: null,
            message: "Category Name's has failed",
            status: "failed"
        })
    }
}


const readCategory= async(req,res) =>{
    try{
        const category= await prisma.categories.findMany()
        res.json({
            info:category,
            message: "Category sucessfulli fetch",
            status :"sucess"
        })
        return
    } catch(err){
        res.json({
            info :null,
            message: err.message,
            status :"failed"
        })
    }
}

const readCategoryById = async(req,res) =>{
    let { id } = req.params
    let message, stat, status;

    try {
        const category = await prisma.categories.findUnique({
            where: {
                id: Number(id)
            }
        })

        if (category) {
            message = "Category was successfully fetched"
            stat = "Success"
            status = 200
        } else {
            message = "Category was not Found"
            stat = "Not Found"
            status = 404
        }

        res.status(status).json({
            info: category,
            message,
            status: stat
        })
        return
    } catch (err) {
        // Menangkap kesalahan Prisma, misalnya jika ID tidak valid
        res.status(500).json({
            info: null,
            message: err.message,
            status: "error"
        })
    }
}

const updateCategory = async(req,res) =>
{
    let { name } = req.body
    let { id } = req.params

    try {
        const category = await prisma.categories.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
            },
        })

        res.json({
            info: category,
            message: "Category has been updated",
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

const deleteCategory = async(req, res) => {
    let { id } = req.params
    try{
    const movies = await prisma.categories.delete({
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

module.exports = {createCategory,readCategory,readCategoryById,updateCategory,deleteCategory}