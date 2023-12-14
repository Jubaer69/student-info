import { tempo } from "@/lib/db";
import { Student } from "@/lib/model/student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let data = [];
    try{
        await mongoose.connect(tempo)
        data = await Student.find();
        return NextResponse.json({result: data, success: true})
    }
    catch(error){
        data = 'not found';
        return NextResponse.json({result: data, success: false})
    }

}

export async function POST(request){
    const payload = await request.json()
    await mongoose.connect(tempo)
    const student = new Student(payload)
    if(!payload.name || !payload.roll || !payload.group || !payload.section){
        return NextResponse.json({result: 'Not found', success: false})
    }
    else{
        const result = await student.save();
        return NextResponse.json({result, success: true})
    }
    
}