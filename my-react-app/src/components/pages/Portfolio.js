import React from 'react';

const Portfolio = () => {
    return (
        <section className="bg-primary text-white px-5 py-32" id="portfolio">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        Portfolio
                    </h2>
                    <p className="pb-5">These are my best projects. They were built using both front end and back end tools!</p>
                </div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                <div>
                    <a href="https://ch3rnand3z.github.io/Concert-Compass/">
                        <img src="https://images.unsplash.com/photo-1688019984360-50d40dfa955a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Concert Compass" />
                    </a>
                </div>
                <div>
                    <a href="https://tacod.herokuapp.com">
                        <img src="https://images.unsplash.com/photo-1687989469143-d034638630ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="Tacod" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/Cxxrupt">
                        <img src="https://images.unsplash.com/photo-1686482149769-f343ce33a613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Note Taker" />
                    </a>   
                </div>
                <div>
                    <a href="https://github.com/Cxxrupt">
                        <img src="https://images.unsplash.com/photo-1688071763915-153941de834f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="Weather Dashboard" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;