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

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';

    const filter: any = {};

    if (search) {
      filter.title = { $regex: search, $options: 'i' }; // case-insensitive search
    }

    if (category) {
      filter.categories = category;
    }

    const news = await NewsModel.find(filter).sort({ published: -1 });

    return NextResponse.json({ success: true, data: news });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

