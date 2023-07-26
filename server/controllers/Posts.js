import PostMessage from '../models/postsMessage.js'

export const getPosts = async (req, res) => 
{

    try 
    {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        console.log("Тримай краба, красунчик!");
        res.status(200).json(postMessages);

    } 
    catch (error) 
    {
        res.status(404).json({message: error.message});       
        console.log("Лох.");
    }

}

export const createPost = (req, res) => 
{
    res.send("Post your Model!");
}