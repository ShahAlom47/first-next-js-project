import connectDB from "@/lib/connectDB";


export const  POST = async ( request)=>{

    try{
        const db = await connectDB()
        const userCollection= db.collection('users')
        const newUser = await request.json()
        console.log(newUser);
        const res = await userCollection.insertOne(newUser)
        return Response.json({res ,message:'New user created'})


    }
    catch ( error){
        console.log(error);

    }
}