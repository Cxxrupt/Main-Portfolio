import React from "react";


const About = () => {
    return (
        <section className="bg-primary text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        About Me
                    </h2>
                    <p className="pb-5">I am a full stack web developer with a background in sales and customer service. I have a passion for learning and problem solving. I am a team player and I am always looking for ways to improve my skills and help others.</p>
                </div>
            </div>
        </section>
    )
}


export default About;