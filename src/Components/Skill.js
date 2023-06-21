import React from 'react'
const { motion } = require('framer-motion')

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-2 px-4 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lx:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 mb-8 w-full text-center md:text-6xl md:mt-32 '>技術</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularDarkLg lg:dark:bg-circularDarkLg
            md:bg-circularDarkMd md:dark:bg-circularDarkMd
            sm:bg-circularDarkSm sm:dark:bg-circularDarkSm
            '>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
                lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.0 }}
                >
                    Web
                </motion.div>
                <Skill name='JavaScript' x='-10vw' y='-10vw' />
                <Skill name='Next' x='-25vw' y='10vw' />
                <Skill name='React' x='-22vw' y='-20vw' />
                <Skill name='Vue.js' x='-30vw' y='20vw' />

                <Skill name='CSS' x='10vw' y='5vw' />
                <Skill name='Bootstrap' x='25vw' y='-10vw' />
                <Skill name='Tailwind' x='30vw' y='-20vw' />
                <Skill name='GA/GTM' x='18vw' y='20vw' />
            </div >
        </>

    )
}

export default Skills