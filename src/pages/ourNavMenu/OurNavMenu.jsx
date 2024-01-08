import { Helmet } from "react-helmet";
import Cover from "../../components/Cover";
import mentBg from "../../assets/menu/banner3.jpg"
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import SectionTitle from "../../components/SectionTitle";
import disImg from "../../assets/menu/dessert-bg.jpeg"
import pizImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import supImg from "../../assets/menu/soup-bg.jpg"

const OurNavMenu = () => {
    const [menu] = useMenu([]);
    const salad = menu.filter(item => item.category === "salad");
    // const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Res | our menu</title>
            </Helmet>
            <Cover img={mentBg} title="OUR MENU" subTit="Would you like to try a dish?"></Cover>
            <SectionTitle subheading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory item={offered}></MenuCategory>
            <MenuCategory item={dessert} title="DESSERTS" img={disImg}></MenuCategory>
            <MenuCategory item={pizza} title="PIZZA" img={pizImg}></MenuCategory>
            <MenuCategory item={salad} title="SALAD" img={saladImg}></MenuCategory>
            <MenuCategory item={soup} title="SOUP" img={supImg}></MenuCategory>
        </div>
    );
};

export default OurNavMenu;