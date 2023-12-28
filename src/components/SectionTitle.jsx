
const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className="text-center mx-auto w-4/12">
            <p  className="text-[#D99904] mb-2">{subheading}</p>
            <h2 className="text-[40px] border-y-2 mb-4 py-2 font-bold">{heading}</h2>
        </div>
    );
};

export default SectionTitle;