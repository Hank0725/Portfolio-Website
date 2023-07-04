import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Detail = ({ position, company, companyLink, address, work, time }) => {
    const ref = useRef(null)
    return <li ref={ref} className='text-main my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className='font-bold text-2xl mb-16 w-full text-center'>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;
                <a href={companyLink}
                    className='capitalize text-primary dark:text-primaryDark'>
                    @{company}
                </a>
            </h3>
            <span className='capitalize text-dark/75 font-medium dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='text-left font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-main text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                經歷
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Detail position='前端工程師' company='如影優活'
                        companyLink={''}
                        time='2022/8-2023/2' address='台北,內湖'
                        work="藥局試用品網站製作(Vue3+TypeScript)
                              健康量測數據資料網站製作" />
                    <Detail position='前端工程師' company='宇萌數位'
                        companyLink={''}
                        time='2020/4-2022/4' address='台北,南軟'
                        work="活動網站製作
                            Model-viewer 3D模型展示
                            產品開發、維護(Vue2)" />
                    <Detail position='Intern實習生' company='台灣微軟'
                        companyLink={''}
                        time='2011-2012' address='台北,信義'
                        work="擔任XBOX PM助理、資訊、電玩展覽Promoter" />

                </ul>
            </div>
        </div>
    )
}

export default Experience