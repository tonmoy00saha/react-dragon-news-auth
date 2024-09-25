import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    const {title,image_url, details, _id}= news;
    return (
        <div>
            <div className="p-5">
            <h3 className="text-xl font-bold">{title}</h3>
            <img className="w-full py-4" src={image_url} alt="" />
            {
                details.length>200?
         
                 <p className="py-4 text-base text-[#706F6F]">{details.slice(0,200)}
                 <Link to={`/news/${_id}`}><button className=" text-[#FF8C47]"> Read more</button></Link>
                 </p>
                 
           
                :
                <p className="py-4 text-base text-[#706F6F]">{details}</p>
            }
            </div>
        </div>
    );
};

export default NewsCard;