import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true,
        },
        project:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true,
        },
    },
    {timestamps: true}
);

export default mongoose.model("List", listSchema);