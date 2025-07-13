import { NextRequest, NextResponse } from "next/server";
import NewsModel from "@/app/models/news";
import { connectDB } from "@/lib/mongodb";

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, { params }: RouteParams) {
  await connectDB();

  const news = await NewsModel.findById(params.id);

  if (!news) {
    return NextResponse.json({ success: false, message: "News not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: news });
}
