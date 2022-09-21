import React from 'react'
import Image from 'next/image';

function PastEvents() {
    return (
        <div id="PastEvents" className="flex flex-col min-h-screen justify-center gap-10 md:gap-20 items-start px-6 md:px-20 lg:px-40">
            <Image src="/images/PastEventsHeading.svg" height="130px" width="400px" className='w-10' />
            <div className="flex items-center gap-20 mb-10 self-center">
                <Image src="/images/lazertag_past.svg" height="1700px" width="1200px" />
            </div>
        </div>
    )
}

export default PastEvents;