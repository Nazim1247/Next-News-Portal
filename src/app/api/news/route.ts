// app/api/news/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb'; // DB connection utility
import NewsModel from '@/app/models/news';
 // Mongoose model

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    // console.log('BODY RECEIVED:', body);

    const news = await NewsModel.create(body);

    return NextResponse.json({ success: true, data: news }, { status: 201 });
  } catch (error: any) {
    console.error('API ERROR:', error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const news = await NewsModel.find().sort({ published: -1 }); // latest first

    return NextResponse.json({ success: true, data: news });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
