import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";

export async function POST(request) {
    try {
        const user = await request.json();
        const database = await connectDB();
        const collection = database.collection("users");

        const result = await collection.insertOne(user);
        console.log(result)
        return NextResponse.json(result);
    } catch (error) {
        console.error("Signup Error:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}
