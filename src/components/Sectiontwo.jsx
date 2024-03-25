import React from 'react';

function Sectiontwo() {
    return (
        <div>
            <h2 className="text-center text-orange-700 text-3xl font-extrabold font-taviraj underline mt-8">OUR COMMITMENT TO BE THE RAKSHAKS OF CHILDREN'S FUTURE</h2>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 mb-8">
                <div className="w-full px-[60px] lg:px-[120px] md:w-1/2 md:pr-4 mb-4 md:mb-0 relative">
                    <iframe
                        title="Embedded YouTube Video"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/zfIk7VeD1WQ" // Updated URL
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                   
                </div>
                <div className="w-full px-4 md:w-1/2 md:pl-4">
                    <p className="text-black text-base font-medium font-taviraj">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet ipsum id velit fringilla, sit amet maximus velit lacinia. Curabitur id volutpat risus. Vestibulum fringilla pharetra purus ac vehicula. Duis nec dolor semper, aliquet purus eget, sollicitudin ligula. Nam gravida ligula ac risus congue, id suscipit lorem suscipit. In hac habitasse platea dictumst. Nunc vehicula nisl vel mi finibus, ut tincidunt lacus hendrerit.
                    </p>
                    <div className='flex gap-8'>
                    <div className="flex flex-col items-center mt-4">
                    <div className="w-5 h-5 rounded-full bg-orange-600 mr-2" />
                    <div className="text-xl font-bold mr-2">145+</div>
                    <div className="text-xs">CHILDREN SERVED</div>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                    <div className="w-5 h-5 rounded-full bg-orange-600 mr-2" />
                    <div className="text-xl font-bold mr-2">0+</div>
                    <div className="text-xs"></div>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                    <div className="w-5 h-5 rounded-full bg-orange-600 mr-2" />
                    <div className="text-xl font-bold mr-2">15+</div>
                    <div className="text-xs">CVOLUNTEERS</div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Sectiontwo;
