import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import conBg from "../../assets/menu/soup-bg.jpg"

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>res | contact</title>
            </Helmet>
            <Cover img={conBg} title="CONTACT US" subTit="Would you like to try a dish?"></Cover>
        </div>
    );
};

export default Contact;