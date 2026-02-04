import db from "@/app/lib/db";
import User from "@/app/Models/User";
import { NextResponse } from "next/server"
export const POST = async (request)=>{
    try{
        const {name, email, password} = await request.json();
        console.log(name,email,password)
        db()
        const ExistingUser = await User.findOne({email});
        if(ExistingUser){
            return new NextResponse(JSON.stringify({message: "user already exists"}),{status: 400})
        }
        const user = await  User.create({name,email,password});


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