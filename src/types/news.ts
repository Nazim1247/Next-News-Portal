export interface NewsItem {
    _id: string;
    title: string;
    description: string;
    snippet: string;
    url: string;
    imageUrl: string;
    language: string;
    published: string;
    source: string;
    categories: string;
}

export interface NewsCardProps {
    item: NewsItem
}