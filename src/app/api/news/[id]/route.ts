
import NewsModel from "@/app/models/news";
import { connectDB } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const news = await NewsModel.findById(params.id);

    if (!news) {
      return NextResponse.json({ success: false, message: "News not found" }, { status: 404 });
    }

    return NextResponse.json(news);
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
