import OurMenu from "../../../components/OurMenu";
import Banner from "./Banner";
import BossReview from "./BossReview";
import Category from "./Category";
import Feature from "./Feature/Feature";
import TestMonial from "./TestMonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BossReview></BossReview>
            <OurMenu></OurMenu>
            <Feature></Feature>
            <TestMonial></TestMonial>
        </div>
    );
};

export default Home;