import React from 'react'
import Wrapper from './../Wrapper';
import Heading from './../Heading';

const Impact = () => {
  return (
    <section className='bg-[#cff0dc] py-15'>

        <Heading content={"Out Impact"} />
        <Wrapper extraClasses="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <div className="card bg-white p-8 text-center">
                <h1 className='text-3xl font-bold mb-2 text-[#15803D]'>500K+</h1>
                <p className='text-[#1F2937]'>Trees Planted</p>

            </div>
            <div className="card bg-white p-8 text-center">
                <h1 className='text-3xl font-bold mb-2 text-[#15803D]'>120+</h1>
                <p className='text-[#1F2937]'>Communities Involved</p>

            </div>
            <div className="card bg-white p-8 text-center">
                <h1 className='text-3xl font-bold mb-2 text-[#15803D]'>30+</h1>
                <p className='text-[#1F2937]'>Countries Reached</p>

            </div>
            
        </Wrapper>

    </section>
  )
}

export default Impact