// import menu1 from "../assets/menu/banner3.jpg"
// import menu2 from "../assets/menu/dessert-bg.jpeg"
// import menu3 from "../assets/menu/menu-bg.png"
// import menu4 from "../assets/menu/pizza-bg.jpg"
// import menu5 from "../assets/menu/salad-bg.jpg"
// import menu6 from "../assets/menu/soup-bg.jpg"

const MenuItem = ({item}) => {
    const {name, recipe, price, image} = item;
    return (
        <div className="flex gap-8 items-center">
            <img className="w-[118px] h-[104px] rounded-e-[200px] rounded-bl-[200px]" src={image} alt="" />
            <div>
                <h1>{name}---------</h1>
                <p>{recipe}</p>
            </div>
            <p>${price}</p>
        </div>
    );
};

export default MenuItem;