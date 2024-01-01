import { Helmet } from "react-helmet";
import Cover from "../../components/Cover";
import shopBg from "../../assets/menu/salad-bg.jpg"

const Shop = () => {
    return (
        <div>
            <Helmet>
                <title>res | shop</title>
            </Helmet>
            <Cover img={shopBg} title="OUR SHOP" subTit="Would you like to try a dish?"></Cover>
        </div>
    );
};

export default Shop;