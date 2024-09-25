import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './LeftSideNav.css'

const LeftSideNav = () => {
    const [categories, setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data));
    },[])
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">All categories</h2>
            {
                categories.map(category=> <NavLink className="block pl-14 py-4" key={category.id} 
                to={`/category/${category.id}`}>{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;