import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import { NewsItem } from "@/types/news";


export default async function Home() {
  const res = await fetch('http://localhost:3000/api/news', {
    cache: "force-cache"
  })
  const json = await res.json();
  const news = json.data;
 
  return (
    <div>
     <Banner />
     <div>
      <h2>Latest News</h2>
      <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {
          news.map((item: NewsItem)=> (
            <NewsCard key={item._id} item={item}/>
          ))
        }
      </div>
     </div>
    </div>
  );
}
