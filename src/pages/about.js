/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/Components/AnimatedText'
import Skills from '@/Components/Skill'
import Experience from '@/Components/Experience'
import Layout from '@/Components/layout'
import profilePic from '../../public/image/profile/IMG001.jpeg'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
import Education from '@/Components/Education'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Hank的前端奇幻之旅 | 關於我</title>
                <meta name='description' content='any description' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Passion Fuels Purpose!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-3 font-xs font-bold text-main uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium text-main'> Hi 我是Hank，一位想透過網頁讓人類世界更美好的前端工程師，致力於不斷精進自己的技能和知識。
                                我相信持續學習和不斷進步是成為一名優秀工程師的關鍵。
                                我始終保持著對最新前端技術的關注，並努力將其應用於實際項目中。
                                我積極參與線上課程、閱讀技術文章、參加技術研討會，以確保自己能夠跟上前端潮流的發展步伐。
                                有2年半經驗在前端領域，目前開始看後端以及更核心的JS知識以及學習React.js、Next.js框架，
                                期望自己走在前端的潮流浪頭，使用網頁技術讓客戶應用在商業和生活上，達到自我成就。
                            </p>
                            <p className='my-4 font-medium text-main'>我相信平時不斷精進自己的code和技術，目的是為了提供給更好的體驗給使用者。
                                目前我正專注於學習 Next.js 和後端相關的技術。Next.js 是一個優秀的 React 框架，能夠幫助我們快速構建高性能、可擴展的網頁應用程式。以實踐 Next.js 的服務端渲染、靜態生成和路由配置等功能。
                                同時我也積極學習後端技術，包括 Node.js、Express 和資料庫等，以便更好地理解和協作於整個開發流程中的後端需求。
                            </p>
                            <p className='font-medium text-main'>
                                在過去的工作經驗中，我經常參與與設計師、後端工程師和產品經理的密切合作。我深信良好的團隊協作能夠將最佳的用戶體驗呈現給使用者。我具備良好的溝通能力和解決問題的技巧，能夠有效地與團隊成員溝通並解決技術上的挑戰。
                                我也積極參與code review和測試等活動，以確保高品質的代碼交付。
                                使用者體驗優先，將帶給您我的前端技術和對網頁的熱情，期待一個機會為您和您的團隊一同製作新的產品。
                            </p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt='Hank Huang' className='w-full h-auto rounded-2xl'
                                priority
                                size='(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw' />
                        </div>
                        <div className='col-span-2 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'><AnimatedNumbers value={50} />+</span>
                                <h2 className='text-xl font-medium capitalize font-black/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={20} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize font-black/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>2+</span>
                                <h2 className='text-xl font-medium capitalize font-black/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years Of Experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main >
        </>
    )
}

export default about