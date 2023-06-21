import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LinkedInIcon, GithubIcon, SunIcon, MoonIcon } from './icon'
import Logo from '@/Components/Logo'
import { motion } from 'framer-motion'
import useThemeSwitcher from './useThemeSwitcher'

const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter()
    console.log(router)
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[1px] 
            inline-block 
            w-0 
            bg-dark 
            absolute 
            left-0 
            -bottom-0.5 
            group-hover:w-full 
            transition-[width] 
            ease 
            duration-300
            dark:bg-light
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link >
    )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
    const router = useRouter()
    console.log(router)

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark`} onClick={handleClick}>
            {title}
            <span className={`
            h-[1px] 
            inline-block 
            w-0 
            bg-light
            absolute 
            left-0 
            -bottom-0.5 
            group-hover:w-full 
            transition-[width] 
            ease 
            duration-300
            dark:bg-dark
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </button >
    )
}

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full p-8 font-medium relative flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:p-8'>
            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href='/' title='首頁' className='mr-1' />
                    <CustomLink href='/about' title='關於我' className='mx-1' />
                    <CustomLink href='/projects' title='專案' className='mx-1' />
                    <CustomLink href='/articles' title='文章' className='mx-1' />
                </nav>
                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a
                        href='https://www.linkedin.com/in/hank-huang-a0031051/'
                        target={'_black'}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 1 }}
                        className='w-6 mr-3'
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href='https://github.com/Hank0725'
                        target={'_black'}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 1 }}
                        className='w-6 mr-3 bg-light dark:bg-dark rounded-full'
                    >
                        <GithubIcon />
                    </motion.a>
                    <button
                        onClick={() => {
                            setMode(mode === 'light' ? 'dark' : 'light')
                        }}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? 'bg-dark text-light ' : 'bg-light text-dark'}`}>
                        {mode === 'dark' ?
                            <SunIcon className={'fill-dark'} />
                            : <MoonIcon className={'fill-dark'} />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0.5, x: '-50%', y: '-50%' }}
                        animate={{ scale: 1, opacity: 1 }}
                        className='mix-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md p-24'>
                        <nav className='flex items-center flex-col justify-center'>
                            <CustomMobileLink href='/' title='Home' className='' toggle={handleClick} />
                            <CustomMobileLink href='/about' title='About' className='' toggle={handleClick} />
                            <CustomMobileLink href='/projects' title='Projects' className='' toggle={handleClick} />
                            <CustomMobileLink href='/articles' title='Articles' className='' toggle={handleClick} />
                        </nav>
                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            <motion.a
                                href='https://www.linkedin.com/in/hank-huang-a0031051/'
                                target={'_black'}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 1 }}
                                className='w-6 mr-3 sm:mx-1'
                            >
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a
                                href='https://github.com/Hank0725'
                                target={'_black'}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 1 }}
                                className='w-6 mx-3 sm:mx-4'
                            >
                                <GithubIcon />
                            </motion.a>

                            <Link
                                href='/'
                                target={'_black'}
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 1 }}
                                className='w-6 mx-1'>
                                H
                            </Link>
                            <button
                                onClick={() => {
                                    setMode(mode === 'light' ? 'dark' : 'light')
                                }}
                                className={`m-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? 'bg-dark text-light ' : 'bg-light text-dark'}`}>
                                {mode === 'dark' ?
                                    <SunIcon className={'fill-dark'} />
                                    : <MoonIcon className={'fill-dark'} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    :
                    null
            }
            <div className='absolute left-[50%] translate-x-[-50%]'>
                <Logo />
            </div>
        </header >
    )
}

export default Navbar