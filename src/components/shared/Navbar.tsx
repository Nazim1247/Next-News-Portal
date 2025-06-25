"use client";
import Link from 'next/link';
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { IoMdMenu } from 'react-icons/io';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <header className='py-4 shadow-md'>
            <nav className='max-w-6xl mx-auto flex items-center justify-between'>
                {/* logo */}
                <div>
                    <Link href={'/'}>Daily News</Link>
                </div>
                {/* desktop menu */}
                <NavigationMenu className='hidden lg:flex'>
                    <NavigationMenuList>
                        <NavigationMenuItem className='flex items-center'>
                            <NavigationMenuLink href='/news' className={`${pathname === '/news' ? 'text-red-500 font-semibold':''}`}>News</NavigationMenuLink>
                            <NavigationMenuLink href='/services' className={`${pathname === '/services' ? 'text-red-500 font-semibold':''}`}>
                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul>
                                    <li>
<NavigationMenuLink href='/services/web'>Web Development</NavigationMenuLink>
                                    </li>
                                    <li>
<NavigationMenuLink href='/services/apps'>Mobile Apps</NavigationMenuLink>
                                    </li>
                                    <li>
<NavigationMenuLink href='/services/seo'>SEO</NavigationMenuLink>
                                    </li>
                                </ul>    
                            </NavigationMenuContent>
                            </NavigationMenuLink>
 <NavigationMenuLink href='/about' className={`${pathname === '/about' ? 'text-red-500 font-semibold':''}`}>About</NavigationMenuLink>                     
 <NavigationMenuLink href='/contact' className={`${pathname === '/contact' ? 'text-red-500 font-semibold':''}`}>Contact</NavigationMenuLink>                     
 <NavigationMenuLink href='/news/create' className={`${pathname === '/news/create' ? 'text-red-500 font-semibold':''}`}>Contact a News</NavigationMenuLink>                     
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                {/* login button */}
                <div className='hidden lg:flex items-center'>
                    <div>
                        <span>Dark Mode</span>
                        <Switch />
                    </div>
                    <Button variant="outline">Button</Button>
                </div>
                <div className='lg:hidden'>
                    <Button>
                        <IoMdMenu />
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;