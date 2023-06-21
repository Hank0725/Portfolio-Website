import React from 'react'
import Link from 'next/link'
import Layout from './layout'

const Footer = () => {
    return (
        <footer className='w-full p-2 font-medium text-lg flex items-center self-center border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base'>
            <Layout className='px-4 flex items-center justify-between lg:flex-col lg:py-6'>
                <span className='text-xs'>
                    {new Date().getFullYear()} &copy; All Right Reserved.
                </span>
                <div className='flex items-center lg:py-2'>
                    <Link href='/' target={'_black'}>網站由 <span className='text-sm underline underline-offset-2'>  Hank Huang  </span>製作</Link>
                </div>
                <div className='text-xs underline underline-offset-2'>
                    <Link href="mailto:hank2929@hotmail.com" target={'_black'}>聯絡我</Link>
                </div>
            </Layout>
        </footer>
    )
}


export default Footer