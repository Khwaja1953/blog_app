import db from "@/app/lib/db";
import User from "@/app/Models/User";
import { NextResponse } from "next/server";
export const POST = async (request)=>{
    try{
        const { email, password} = await request.json();
        console.log(email,password)
        db()
        return new NextResponse(JSON.stringify({ message: 'User has been created' }), {
        status: 201,
    });

    }
    catch(error){
        return new NextResponse(error.message, {
      status: 500,
    });
  
    }
}