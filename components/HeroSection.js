import React, { useState } from 'react'
import Lottie from 'lottie-react'
import lasertagMainLogo from "../lottie/data.json"
import Image from 'next/image';

function Hero() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);

    return (
        <div id="Hero" className="flex flex-col h-screen pb-20 justify-center items-center gap-5 md:gap-20">
            <div className='h-32 sm:h-40 md:h-60 w-full md:w-2/3 object-cover object-center' style={{
                backgroundImage: "url('/images/mainAnimation.gif')",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <button className='py-3 px-5 text-xl bg-transparent border-2 border-gray-500 rounded-lg w-48 hover:bg-laser-yellow hover:border-laser-yellow hover:text-black transition-all ease-linear' onMouseOver={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>{hover1 ?  "Coming soon" : "Register Now"}</button>
                <button className='py-3 px-5 text-xl bg-transparent border-2 border-gray-500 rounded-lg w-48 hover:bg-laser-yellow hover:border-laser-yellow hover:text-black transition-all ease-linear' onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>{hover2 ?  "Coming soon" : "Book Slot"}</button>
            </div>
        </div>
    )
}

export default Hero;