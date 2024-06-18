export  const GET = async(request,{params})=>{
    console.log(params.id);
    return  Response.json({
        message:`hello ${params.id}`
    })
     }


export  const DELETE = async(request,{params})=>{
    console.log(params.id);
    return  Response.json({
        message:`delete ${params.id}`
    })
     }