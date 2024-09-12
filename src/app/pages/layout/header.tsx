"use client";
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../assets/Images/webskyminds.png'
import './header.css'

// Interface for navigation items
interface NavItem {
    name: string;
    href: string;
    subItems?: NavItem[];
}

const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', subItems: [{ name: 'HTML', href: '/services/html' }] },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
];


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        if (openDropdownIndex === index) {
            setOpenDropdownIndex(null);
        } else {
            setOpenDropdownIndex(index);
        }
    };

    return (
        <>
            <header className="bg-[#f2f7fd]">
                <div className="container mx-auto">
                    <nav className="flex max-w-7xl items-center justify-between pt-4 pb-2" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image src={Logo} width={50} height={50} alt='loog' priority={true} className='h-auto'></Image>
                            </a>
                        </div>
                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        {/* Desktop menu */}
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navItems.map((item, index) => (
                                <div key={item.name}>
                                    {item.subItems ? (
                                        <div className="relative">
                                            <button
                                                className="text-sm font-semibold leading-6 text-gray-900"
                                                onClick={() => toggleDropdown(index)}
                                            >
                                                {item.name}
                                            </button>
                                            {openDropdownIndex === index && (
                                                <div className="absolute bg-white shadow-md rounded-lg mt-2">
                                                    {item.subItems.map((subItem) => (
                                                        <a
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                                                        >
                                                            {subItem.name}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                                            {item.name}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </nav>
                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="lg:hidden" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 z-10"></div>
                            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#f2f7fd] p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <Image src={Logo} width={50} height={50} alt='loog' priority={true} className='h-auto' ></Image>
                                    </a>
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flow-root">
                                    <div className="divide-y divide-gray-500/10">
                                        <div className="space-y-2 py-3">
                                            {navItems.map((item, index) => (
                                                <div key={item.name} className="mx-3">
                                                    {item.subItems ? (
                                                        <>
                                                            <button
                                                                type="button"
                                                                className="flex w-full items-center justify-between rounded-lg py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                onClick={() => toggleDropdown(index)}
                                                            >
                                                                {item.name}
                                                                <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            {openDropdownIndex === index && (
                                                                <div className="mt-2 space-y-2">
                                                                    {item.subItems.map((subItem) => (
                                                                        <a
                                                                            key={subItem.name}
                                                                            href={subItem.href}
                                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                        >
                                                                            {subItem.name}
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <a
                                                            href={item.href}
                                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="py-2">
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                                Log in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>            
        </>

    );
};

export default Header;
