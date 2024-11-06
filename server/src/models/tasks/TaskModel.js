import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
        title: {
            type: String,
            required: [true, "Please provide a tite"],
            unique: true
        },
        description: {
            type: String,
            default: "No Description"
        },
        dueDate: {
            type: Date,
            default: Date.now()
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        },
        completed: {
            type: Boolean,
            default: false
        },
        priority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "low"
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "user",
            required: true
        },
    },
    { timestamps: true }
);

const TaskModel = mongoose.model("Task", TaskSchema);

export default TaskModel;