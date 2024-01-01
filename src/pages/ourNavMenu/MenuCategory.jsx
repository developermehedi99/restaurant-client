import { Link } from "react-router-dom";
import Cover from "../../components/Cover";
import MenuItem from "../../components/MenuItem";

const MenuCategory = ({ item, img, title }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <section className="grid md:grid-cols-2 my-8 gap-6">
                {
                    item.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </section>
            <Link to={`/shop/${title}`}><button className="btn mb-10 text-center btn-outline btn-secondary">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;