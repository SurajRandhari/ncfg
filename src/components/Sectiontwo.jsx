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
                    I have been praying for many years.  In 2002, I took 4 orphan boys and kept them in my house, taking every care and teaching them.  I did not have much money or a good house to live in, so I put them in one of my church houses.  There was no help at that time.  Then gradually the number of sons and daughters started increasing day by day.  I took everything I had as his.  Then the staff were brought to teach and by the grace of God, now those boys and girls have a small roofed house, 60 boys and girls are living there, many of them are orphans,Needy,innocent, poor.There are 10 staff and 8 board members.
                    </p>
                    <div className='flex gap-8'>
                    <div className="flex flex-col items-center mt-4">
                    <div className="w-5 h-5 rounded-full bg-orange-600 mr-2" />
                    <div className="text-xl font-bold mr-2">60+</div>
                    <div className="text-xs">CHILDREN SERVED</div>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                    <div className="w-5 h-5 rounded-full bg-orange-600 mr-2" />
                    <div className="text-xl font-bold mr-2">10+</div>
                    <div className="text-xs">STAFF</div>
                    </div>
                    <div className="flex flex-col items-center mt-4">
                    <div className="w-5 h-5 rounded-full bg-orange-600 mr-2" />
                    <div className="text-xl font-bold mr-2">15+</div>
                    <div className="text-xs">BOARD MEMBERS</div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Sectiontwo;
