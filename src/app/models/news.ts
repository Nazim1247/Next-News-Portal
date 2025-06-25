import mongoose, { Schema } from 'mongoose';

const NewsSchema = new Schema({
  title: String,
  description: String,
  snippet: String,
  url: String,
  imageUrl: String,
  language: String,
  published: String,
  source: String,
  categories: String,
});

const NewsModel = mongoose.models.News || mongoose.model('News', NewsSchema);

export default NewsModel;
