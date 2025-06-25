import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";


export default function Home() {
  return (
    <div>
     <Banner />
     <div>
      <h2>Latest News</h2>
      <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NewsCard />
      </div>
     </div>
    </div>
  );
}
