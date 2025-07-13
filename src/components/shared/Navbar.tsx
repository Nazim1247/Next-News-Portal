'use client';

import Link from 'next/link';
import React, { useContext } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { IoMdMenu } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { ThemeContext } from '@/context/themeContext';

// Optional: Define ThemeContextType if not defined
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = () => {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext) as ThemeContextType;

  const navLinkClass = (path: string) =>
    pathname === path ? 'text-red-500 font-semibold' : '';

  return (
    <header className={`py-4 shadow-md ${isDarkMode ? 'bg-gray-900 text-white' : ''}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="text-xl font-bold">
            Daily News
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex gap-4 items-center">
            {/* Static Links */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/news" className={navLinkClass('/news')}>
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Dropdown Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-48">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/web" className="block hover:underline">
                        Web Development
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/apps" className="block hover:underline">
                        Mobile Apps
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/services/seo" className="block hover:underline">
                        SEO
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Other Links */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={navLinkClass('/about')}>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className={navLinkClass('/contact')}>
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/news/create" className={navLinkClass('/news/create')}>
                  Create a News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme Switch & Button */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={toggleTheme}>
            <span>Dark Mode</span>
            <Switch checked={isDarkMode} />
          </div>
          <Button variant="outline">Login</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="outline" size="icon">
            <IoMdMenu size={20} />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
