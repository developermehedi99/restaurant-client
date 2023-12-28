import chefImg from "../../../assets/home/chef-service.jpg";
const BossReview = () => {
    return (
        <div>
            <section className="relative mb-12">
                <div>
                    <img src={chefImg} alt="" />
                </div>
                <div className="w-[900px] absolute top-[50px] left-[200px] bg-white mx-auto text-center py-24 px-40">
                    <h1 className="text-4xl">Bistro Boss</h1>
                    <p className="w-[700px] text-center mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </section>
        </div>
    );
};

export default BossReview;