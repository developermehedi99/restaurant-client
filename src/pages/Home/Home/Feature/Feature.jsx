import img1 from "../../../../assets/home/featured.jpg";
import SectionTitle from "../../../../components/SectionTitle";
import "./Feature.css"

const Feature = () => {
    return (
        <div className="featured-section bg-fixed bg-slate-500 bg-opacity-30 p-20 text-white">
            <SectionTitle
                subheading={'---Check it out---'}
                heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="md:flex gap-6 pt-4 items-center justify-center">
                <img className="w-[600px] h-[400px]" src={img1} alt="" />
                <div className="md:ml-5">
                    <h2 className="text-2xl font-bold">March 20, 2023</h2>
                    <h3 className="text-xl font-bold">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                </div>
            </div>
        </div>
    );
};

export default Feature;