import React from 'react'

const Title = ({ title, subTitle, align }) => {

    return (

        <>

            <div
                className={`flex flex-col justify-center items-center text-center 
                ${align === 'left' ? 'md:items-start md:text-left md:pl-4' : ''}`}
            >

                <h1
                    className="font-extrabold text-3xl md:text-3xl 
               bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 
               text-transparent bg-clip-text leading-snug tracking-tight"
                >

                    {title}

                </h1>

                <p className="text-sm md:text-base text-slate-600 mt-3 max-w-xl">

                    {subTitle}

                </p>

            </div>


        </>

    )

}

export default Title