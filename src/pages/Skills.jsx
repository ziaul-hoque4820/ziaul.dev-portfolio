import SectionTitle from "../shared/SectionTitle";


const Skills = () => {

    return (
        <section
            id="skills"
            className="my-24 md:my-32 text-sm max-w-6xl mx-auto px-4"
        >
            <SectionTitle title={"Skills"} />


            {/* Skills Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
            </div>
        </section>
    );
};

export default Skills;
