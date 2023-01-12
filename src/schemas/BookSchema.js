import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: [true, "Pole wydawca jest wymagane"]
    },
    amount: {
        type: Number,
        required: true,
        min: [1, "Nieprawidłowa ilość"]
    },
})

export default mongoose.model("Book", BookSchema);