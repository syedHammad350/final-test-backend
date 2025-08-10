export const image = async (req,res) => {
try {
    const imageUrl=req.file.path
    return res.status(201).json({
        message:"Image upload successfully",
        imageUrl:imageUrl
    })
} catch (error) {
    return res.status(500).json({message:"Image not uploaded",error: error.message})
    
}
}