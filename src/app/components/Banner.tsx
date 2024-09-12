import Image from 'next/image';
import React from 'react';
// import imge from '../assets/Images/bannerImage/bannerBg.jpg'
import styles from './banner.module.css'; // Make sure this file exists and contains relevant styles

const Banner: React.FC = () => {
    // Use a path relative to the public directory
    // const BannerImage = '../assets/Images/bannerImage/bannerBg.jpg'; // Ensure this path is correct

    return (
        <>
            <div className={styles.backgoundImage}>
                <div className="container mx-auto relative isolate px-6 pt-14 lg:px-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-0 md:py-24">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                sky web minds .{' '}
                                <a href="#" className="font-semibold text-[#52c3f7]">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            Make dreams come true, take steps towards success.
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                At Sky Web Minds, we combine innovation with expertise to elevate your online business. Our tailored solutions are designed to meet your unique needs and help you achieve remarkable results in the digital space.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-[#52c3f7] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4291e0] focus:ring-2 focus:ring-[#4291e0] focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                </div>
            </div>



            {/* <div className="bg-[#f2f7fd] py-12">
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <div className="w-full lg:w-1/2 pr-6">
                            <h1 className="text-3xl xl:text-4xl font-black leading-tight">
                                Innovative <span className='text-[#52c3f7]'>IT Solutions</span> for a Smarter Business
                            </h1>
                            <p className="mt-4 text-lg">
                                Empowering Your Business with Cutting-Edge Technology & Expert IT Services
                            </p>
                            <div className="mt-8">
                                <div className="relative mb-4">
                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                        <svg className="text-gray-700 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </div>
                                    <input type="text" className="w-full border bg-gray-100 px-12 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#52c3f7]" placeholder="Type (e.g junior, senior)" />
                                </div>
                                <div className="relative mb-4">
                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                        <svg className="text-gray-700 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <input type="text" className="w-full border bg-gray-100 px-12 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-[#52c3f7]" placeholder="Mountain View, California" />
                                </div>
                                <button className="bg-[#52c3f7] text-white px-5 py-3 rounded font-semibold hover:bg-[#4291e0] focus:outline-none focus:ring-2 focus:ring-[#4291e0]">
                                    Find Designers
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Image
                                src={BannerImage}
                                alt="Designers"
                                width={680}
                                height={500}
                                className={styles.bannerImage} // Use CSS module class if applicable
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Banner;
