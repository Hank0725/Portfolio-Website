import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/layout'
import article1 from '../../public/image/articles/pagination component in reactjs.jpeg'
import article2 from '../../public/image/articles/What is Redux with easy explanation.png'
import { motion, useMotionValue } from 'framer-motion'
import article3 from '../../public/image/articles/create loading screen in react js.jpeg'
import article4 from '../../public/image/articles/form validation in reactjs using custom react hook.png'
import article5 from '../../public/image/articles/What is higher order component in React.jpeg'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display = 'inline-block'
        x.set(event.PageX)
        y.set(-10)
    }

    function handleMouseLeave() {
        imgRef.current.style.display = 'none'
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link}
            target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>
                {title}
            </h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between 
        bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 
        dark:bg-dark dark:text-light dark:border-light
        sm:flex-col'
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.2, ease: 'easeInOut' } }}
            viewport={{ once: true }}
        >
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-xl font-semibold hover:underline '>{title}</h2>
            </Link>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-main font-semibold pl-4 dark:text-main sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li >
    )
}

const FeatureArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:text-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link}
                target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-main text-2xl font-bold my-2 mt-4 hover:underline dark:text-light xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-dark text-sm mb-2 dark:text-light'>{summary}</p>
            <span className='text-main font-semibold dark:text-main'>{time}</span>
        </li >
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Hank的前端奇幻之旅 | Articles </title>
                <meta name='description' content='any description' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text='I can change the world' className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl s:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 md:gay-y-16'>
                        <FeatureArticle
                            img={article1}
                            title='Vue.js文章'
                            time='9 min read'
                            summary=' Learn how to build a custom pagination component in ReactJS from scratch.
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                            link='/'
                        />
                        <FeatureArticle
                            img={article2}
                            title='React文章'
                            time='10 min read'
                            summary=' Build 3 Types Of Loading Screens
                            Learn how to create stunning loading screens in React with 3 different methods.
                            Discover how to use React-Loading, React-Lottie & build a custom loading screen.
                            Improve the user experience.'
                            link='/'
                        />
                    </ul>
                    <h2 className='font-bold text-3xl w-full text-center my-16 mt-32 dark:text-light'>All articles</h2>
                </Layout>
                <ul>
                    <Article
                        title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                        date='June 6, 2023'
                        link='/'
                        img={article3}
                    />
                    <Article
                        title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                        date='July 25, 2023'
                        link='/'
                        img={article4}
                    />
                    <Article
                        title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                        date='July 6, 2023'
                        link='/'
                        img={article5}
                    />
                    <Article
                        title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                        date='June 6, 2023'
                        link='/'
                        img={article3}
                    />
                    <Article
                        title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                        date='July 25, 2023'
                        link='/'
                        img={article4}
                    />
                    <Article
                        title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                        date='July 6, 2023'
                        link='/'
                        img={article5}
                    />
                </ul>
            </main>
        </>
    )
}

export default articles