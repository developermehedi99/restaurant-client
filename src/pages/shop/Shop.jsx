import { Helmet } from "react-helmet";
import Cover from "../../components/Cover";
import shopBg from "../../assets/menu/salad-bg.jpg"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/usemenu";
import ShopTab from "./ShopTab";
// import { useParams } from "react-router-dom";

const Shop = () => {
    const [indexTab, setIndexTab] = useState(0)
    const [menu] = useMenu();
    // const {category} = useParams();
    // console.log(category)
    const salad = menu.filter(item => item.category === "salad");
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <div className="">
            <Helmet>
                <title>res | shop</title>
            </Helmet>
            <Cover img={shopBg} title="OUR SHOP" subTit="Would you like to try a dish?"></Cover>
            <Tabs className="text-center" defaultIndex={indexTab} onSelect={(index) => setIndexTab(index)}>
                <TabList className="text-2xl font-medium ml-3 my-9">
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                  <ShopTab items={salad}></ShopTab>
                </TabPanel>
                <TabPanel> 
                    <ShopTab items={pizza}></ShopTab>
                </TabPanel>
                <TabPanel>
                <ShopTab items={soup}></ShopTab>
                </TabPanel>
                <TabPanel>
                <ShopTab items={dessert}></ShopTab>
                </TabPanel>
                <TabPanel>
                <ShopTab items={drinks}></ShopTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;