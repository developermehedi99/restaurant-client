
const Cover = ({img, title, subTit}) => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">{subTit}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;