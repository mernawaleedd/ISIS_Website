import React from 'react';
import Featured from "../assets/images/Featured.png";
import News1 from "../assets/images/news1.png";
import News2 from "../assets/images/news2.png";
import News3 from "../assets/images/news3.png";
import Description from './Description';
const newsData = {
  featured: {
    image: Featured,  
    date: 'Mar 4, 2025',
    title: 'Progress Meeting On Kitchener Project Performance Monitoring System With HCWW'
  },
  allNews: [
    {
      image: News1,
      date: 'February 5, 2025',
      title: 'Coordination Meeting On JCAR Project: Advancing On Asset Management For Pumping Stations'
    },
    {
      image: News2,
      date: 'Oct 19, 2024',
      title: 'PEPSI At Cairo Water Week 2024 | Enhancing Decision-Making Through Asset Management'
    },
    {
      image: News3,
      date: 'July 2, 2024',
      title: 'Progress Meeting On Dutch-Egyptian Cooperation For Water Distribution Improvement'
    }
  ]
};

const News = () => {
  return (
    <div className="bg-[#F6F6F6] p-8 py-16 relative">
       <Description title="Latest News And Insights"/>
       <div className="container mb-8">
  <h3 className="text-lg font-semibold mb-4 text-[#24698F]">Featured</h3>
  <div className="flex flex-col md:flex-row items-center md:items-stretch gap-4 bg-[#ffffff] p-4 rounded-3xl shadow-md">
    <img 
      src={newsData.featured.image} 
      alt="Featured" 
      className="w-full md:w-1/2 h-80 object-cover rounded-3xl"
    />
    <div className="flex flex-col justify-center md:w-1/2 mt-4 md:mt-0 ">
      <h4 className="text-[#5E5E5E] font-semibold mb-2">{newsData.featured.date}</h4>
      <p className="text-xl font-medium text-[#0E2F40]">{newsData.featured.title}</p>
    </div>
  </div>
</div>
      <div className='container'>
        <h3 className="text-lg font-semibold mb-4 text-[#5E5E5E]">All News</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newsData.allNews.map((news, index) => (
            <div key={index} className="bg-[#ffffff] p-4 rounded-3xl shadow-md mb-32">
              <img src={news.image} alt="News" className="w-[full] h-60 object-cover rounded-3xl m-0" />
              <h4 className="text-[#5E5E5E] font-semibold mb-2 pt-14">{news.date}</h4>
              <p className="text-base font-medium pb-4 text-[#0E2F40] leading-[1.75]">{news.title}</p>
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default News;
