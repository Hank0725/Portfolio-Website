import AnimatedText from '@/Components/AnimatedText'
import Layout from '@/Components/layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/Components/icon'
import project1 from "../../public/image/projects/healthylife.png"
import project2 from "../../public/image/projects/rossmax.png"
import project3 from "../../public/image/projects/taipeicity.png"
import project4 from "../../public/image/projects/hualien.png"

import sideProject1 from "../../public/image/projects/weather.png"
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const FeatureProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-3 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light 
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            ' />
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
                href={link} target='_blank'>
                <FramerImage src={img} alt={title} className='w-full h-60%'
                    priority
                    size='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-main font-medium text-xl dark:text-main xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'>
                        <GithubIcon />
                    </Link>
                    <Link className='m-2 rounded-lg bg-light text-main border-main  border-2
                border-solid text-center p-2 text-sm font-semibold dark:bg-light dark:text-dark
                    sm:px-4 sm:text-base
                    '
                        href={github} target='_blank'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-3 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light 
            rounded-br-3xl xs:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            ' />
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
                href={link} target='_blank'>
                <FramerImage src={img} alt={title} className='w-full h-60'
                    priority
                    size='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-main font-medium text-xl dark:text-main lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link
                        href={link}
                        target='_blank'
                        className='m-2 rounded-lg bg-light text-main border-main  border-2
                        border-solid text-center p-2 text-sm font-semibold dark:bg-light dark:text-dark
                            sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Hank的前端冒險旅程 | 專案作品集 </title>
                <meta name='description' content='any description'></meta>
            </Head>
            <main className='w-full mb-16 flex flex-col items-start justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Imagination Trumps Knowledge!'
                        className='mb-16 lg:!text-7xl md:!text-6xl xs:!text-4xl'
                    />
                    <div className='grid grid-cols-12 gap-12 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeatureProject
                                title='寵物週記(籌備製作中)'
                                img={project1}
                                summary='一個與主人陪伴寵物每天成長的週記網站，記錄各種寵物，讓你的寶貝寵物成為網紅，可放每天寶貝的相片、日記、健康、飲食紀錄'
                                link='/'
                                github='/'
                                type='Side Project作品集' />
                        </div>
                        <div className='col-span-12'>
                            <FeatureProject
                                title='氣象預報App'
                                img={sideProject1}
                                summary='React練習筆記'
                                link='https://hank0725.github.io/Taiwan-Realtime-Weather-App/'
                                github='https://hank0725.github.io/Taiwan-Realtime-Weather-App/'
                                type='Side Project作品集' />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='體驗健康人生網(試用品兌換網站)'
                                img={project1}
                                link='https://d3g6pjlvhp7kds.cloudfront.net/'
                                type='過去參與專案' />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='優盛健康量測數據網頁'
                                img={project2}
                                link='https://staging.www.ulifecloud.com/mr.html?data=3.0.0.0.0.1zKzGGg.qbXnN.BMRyg.wPhk1.1.0.0100030946.%E8%8E%AB%E2%97%8B%E2%97%8B%E9%81%93.2vJwkH&wtSKU=VU_HS_WG260'
                                type='過去參與專案' />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='台北市智慧城市(手機AR模型)'
                                img={project3}
                                link='https://s3.ap-southeast-1.amazonaws.com/smartcity-summit.arplanets.com/busCity.html'
                                type='過去參與專案' />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title='花蓮AR穿越時光機網頁'
                                img={project4}
                                link='https://webview.plus.marq.com.tw/2020_hualien_ar/'
                                type='過去參與專案' />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects