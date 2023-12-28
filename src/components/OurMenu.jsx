import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";

const OurMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular')
            setMenus(popularItem);
        })
    },[])
    return (
        <div className="my-12">
            <SectionTitle
            subheading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <section className="grid md:grid-cols-2 gap-6">
               {
                menus.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
               }
            </section>
        </div>
    );
};

export default OurMenu;