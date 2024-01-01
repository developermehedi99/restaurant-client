import FootItem from "../../components/FootItem";

const ShopTab = ({items}) => {
    return (
        <div>
              <div className="grid md:grid-cols-3 gap-6">
                        {
                            items.map(item => <FootItem
                            key={item._id}
                            item={item}
                            ></FootItem>)
                        }
                    </div>
        </div>
    );
};

export default ShopTab;