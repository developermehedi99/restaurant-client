
const FootItem = ({ item }) => {
    const { name, recipe, price, image } = item;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-800 text-white px-2 py-1 font-semibold absolute top-5 right-5">${price}</p>
                <div className="card-body ">
                    <h2 className="card-title text-center justify-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootItem;