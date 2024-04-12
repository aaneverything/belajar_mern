import userr from '../model/userModel.mjs'

export const getUsers = async(req, res) => {
    try{
        const response = await userr.findAll()
        res.status(200).json(response)
    } catch (error){
        console.log(error.message)
    }
}
export const getUserById = async(req, res) => {
    try{
        const response = await userr.findOne({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error){
        console.log(error.message)
    }
}
export const createUsers = async(req, res) => {
    try{
        await userr.create(req.body)
        res.status(201).json({msg: "user berhasil dibuat"})
    } catch (error){
        console.log(error.message)
    }
}

export const updateUsers = async(req, res) => {
    try{
        await userr.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "user updated"})
    } catch (error){
        console.log(error.message)
    }
}


export const deleteUsers = async(req, res) => {
    try{
        await userr.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({msg: "user deleted"})
    } catch (error){
        console.log(error.message)
    }
}
