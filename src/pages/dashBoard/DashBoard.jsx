import { Helmet } from "react-helmet";
import Cover from "../../components/Cover";
import dasBg from "../../assets/menu/pizza-bg.jpg"

const DashBoard = () => {
    return (
        <div>
            <Helmet>
                <title>res | contact</title>
            </Helmet>
            <Cover img={dasBg} title="DASHBOARD" subTit="Would you like to try a dish?"></Cover>
        </div>
    );
};

export default DashBoard;