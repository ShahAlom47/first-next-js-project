export  const GET = async()=>{
return  Response.json({
    message:'hellow user'
})
 }


export  const POST = async(request)=>{
    const  newComment = await request.json()
return  Response.json(newComment)
 }