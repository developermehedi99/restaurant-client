import { Helmet } from "react-helmet";
import Cover from "../../components/Cover";
import mentBg from "../../assets/menu/banner3.jpg"

const OurNavMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Res | our menu</title>
            </Helmet>
            <Cover img={mentBg} title="OUR MENU" subTit="Would you like to try a dish?"></Cover>
        </div>
    );
};

export default OurNavMenu;