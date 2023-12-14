import mongoose from "mongoose";

const proHub = new mongoose.Schema({
    name: String,
    roll: String,
    group: String,
    section: String
})

export const Student = mongoose.models.students || mongoose.model("students", proHub);
