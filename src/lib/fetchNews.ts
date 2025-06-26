export const fetchNews = async (category: string, search: string)=>{
    try {
        const response = await fetch(`http://localhost:3000/api/news?category=${category}&search=${search}`)
        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`)
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching', error);
        return [];
    }
}