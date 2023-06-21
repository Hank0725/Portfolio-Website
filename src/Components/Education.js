import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Detail = ({ type, time, place, info }) => {
    const ref = useRef(null)
    return <li ref={ref} className='text-main my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className='font-bold text-2xl mb-16 w-full text-center'>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize text-dark/75 font-medium dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='text-left font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const { scrollProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-main text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                學歷
            </h2>
            <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Detail
                        type='東吳大學日文系'
                        time='2005-2012'
                        place='外雙溪校區'
                        info='Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial
                        Intelligence.'
                    />
                    <Detail
                        type='Master Of Computer Science'
                        time='2020-2022 '
                        place='Stanford University'
                        info="Completed a master's project on deep learning, developing a new neural network architecture for natural
                        language understanding."
                    />
                    <Detail
                        type='Online Coursework'
                        time='2016-2020'
                        place='Coursera And EdX'
                        info='Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine
                        Learning Engineering.'
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education