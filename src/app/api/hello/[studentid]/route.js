import { tempo } from "@/lib/db";
import { Student } from "@/lib/model/student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content){
    const stId = await content.params.studentid;
    const payload = await request.json();
    const filter = {_id: stId}
    await mongoose.connect(tempo)
    const jub = await Student.findOneAndUpdate(filter, payload)
    return NextResponse.json({result: jub, success: true})
}

export async function GET(request, content){
    const stId = await content.params.studentid;
    const filter = {_id: stId}
    await mongoose.connect(tempo)
    const jub = await Student.findById(filter)
    return NextResponse.json({result: jub, success: true})
}

export async function DELETE(request, content){
    const idx = content.params.studentid;
    const filter = {_id: idx};
    await mongoose.connect(tempo)
    const jub = await Student.deleteOne(filter)
    return NextResponse.json({result: jub, success: true})
}