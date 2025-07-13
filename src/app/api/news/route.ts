// app/api/news/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import NewsModel from '@/app/models/news';
import { Error } from 'mongoose'; // For error type

// Define News type if needed for body validation
interface INews {
  title: string;
  content: string;
  author?: string;
  categories?: string[];
  published?: Date;
  // Add any additional fields your schema accepts
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body: INews = await req.json();

    const news = await NewsModel.create(body);

    return NextResponse.json({ success: true, data: news }, { status: 201 });
  } catch (error) {
    const err = error as Error;
    console.error('API ERROR:', err.message);
    return NextResponse.json(
      { success: false, message: err.message },
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

    const filter: Record<string, any> = {};

    if (search) {
      filter.title = { $regex: search, $options: 'i' };
    }

    if (category) {
      filter.categories = category;
    }

    const news = await NewsModel.find(filter).sort({ published: -1 });

    return NextResponse.json({ success: true, data: news });
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
