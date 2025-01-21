'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Jura } from 'next/font/google';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ModeToggle } from './theme-mode';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useSession } from 'next-auth/react';
import { handleSignOut } from '@/lib/auth/signOutServerAction';
import { checkIsAuthenticated } from '@/lib/auth/checkIsAutheticatedServerAction';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
const juraFont = Jura({ subsets: ['latin'], weight: '700' })
const Profile = () => {
    const handelLogout = async () => {
        await handleSignOut()
        window.location.reload();
    }
    const session = useSession();
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Avatar >
                    <AvatarImage src={session.data?.user?.image || "https://github.com/shadcn.png"} alt="profile" />
                    <AvatarFallback>DP</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <div className='flex justify-center gap-4 w-full items-center' >
                            <Avatar>
                                <AvatarImage src={session.data?.user.image} />
                                <AvatarFallback>DP</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-1">
                                <h1 className='text-lg font-semibold'>{session.data?.user?.name}</h1>
                                <p className="">{session.data?.user?.email}</p>
                                <Link className='text-sm text-purple-400 hover:cursor-pointer'
                                    href={'/profile'}>View Profile</Link>
                            </div>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <button className='flex justify-center items-center content-center gap-4'
                            onClick={handelLogout}>
                            Log Out
                            <CiLogout className='text-xl' />
                        </button>
                        <DropdownMenuShortcut className='hidden lg:block'>
                            ⇧⌘Q
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
function NavBar() {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const navBarItems = [
        { title: 'Home', url: '/' },
        { title: 'Courses', url: '/courses' },
        { title: 'About', url: '/about' },
        { title: 'Contact', url: '/contact' },
    ];
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const handelLogin = () => {
        router.push('/login');
    }
    useEffect(() => {
        const checkAuthentication = async () => {
            const isAuthenticated = await checkIsAuthenticated();
            setIsAuthenticated(isAuthenticated);
        };
        checkAuthentication();
    }, [])
    return (
        <div className='w-full'>
            <nav
                className={`${juraFont.className} flex justify-between px-4 items-center dark:bg-black text-black dark:text-white shadow-lg dark:shadow-cyan-500/50 h-[8vh] z-40 `}
            >
                {/* logo */}
                <div>
                    <Link href="/">
                        <h1 className="text-2xl font-extrabold text-indigo-400">LCWA</h1>
                    </Link>
                </div>
                {navBarItems.map((item, index) => {
                    const isActive = pathName === item.url;
                    return (
                        <Link
                            key={index}
                            href={item.url}
                            className={clsx(
                                'lg:flex justify-evenly px-4 py-2 text-2xl dark:text-white hover:text-indigo-400 text-black dark:hover:text-indigo-400 hidden ',
                                isActive ? 'text-blue-500 dark:text-indigo-400 font-bold underline underline-offset-8' : ''
                            )}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {item.title}
                        </Link>
                    );
                })}
                <div className='lg:flex gap-8 hidden'>
                    {/* theme changer button */}
                    <ModeToggle />
                    {/* Avatar or profile */}
                    {isAuthenticated ? <Profile /> : <Button onClick={handelLogin}>Login</Button>}
                </div>
                {/* hamburger menu */}
                <div className='lg:hidden dark:text-white'>
                    {!isMenuOpen ? <button onClick={handleToggleMenu}>
                        <IoMenu className='text-3xl' />
                    </button> : <button onClick={handleToggleMenu}>
                        <IoClose className='text-3xl' />
                    </button>}
                </div>
                {isMenuOpen && (<div className='flex flex-col gap-4 h-full w-full absolute top-20 left-0 backdrop-blur-lg dark:text-white transition-transform z-50'

                >
                    {
                        navBarItems.map((item, index) => (
                            <Link href={item.url}
                                onClick={() => setIsMenuOpen(false)}
                                className='text-3xl p-4 font-extrabold'
                            >
                                <h1>{item.title}</h1>
                            </Link>
                        ))
                    }
                    {!isAuthenticated && <Button onClick={handelLogin} className='w-1/2 mx-4'>Login</Button>}
                    <div className='flex gap-4 justify-end pr-5'>
                        <ModeToggle />
                        {/* Avatar or profile */}
                        {isAuthenticated && <Profile />}
                    </div>
                </div>)}
            </nav>
        </div>
    );
}

export default NavBar;
