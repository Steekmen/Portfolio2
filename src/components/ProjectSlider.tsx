"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"

import { FreeMode, Pagination } from "swiper/modules"
import { ProImages, ProImages2 } from "@/constants"
import Link from "next/link"

const ProjectSlider = () => {
    return (
        <div className="w-[70%] md:w-[40%]">
            <Swiper
                breakpoints={{
                    700: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    }
                }}
                freeMode={true}
                pagination={{
                    clickable: true
                }}
                modules={[FreeMode, Pagination]}
            >
                <SwiperSlide className="mb-14">
                    <div className="grid grid-cols-1 gap-4 md:px-16">
                        {ProImages.map((image) => (
                            <div className="relative group w-[150px] h-[150px] md:w-full md:h-[320px]" key={image.src}>
                                <Link className="absolute z-50" href={image.href}>
                                    <Image
                                        src={image.src}
                                        alt="project image"
                                        width={580}
                                        height={580}
                                        className="rounded-md h-full w-full"
                                    />
                                </Link>

                                <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hove:opacity-70 transition-opacity duration-200" />
                                <div className="cursor-pointer absolute inset-0 flex items-center justify-cenetr opacity-0 group-hove:opacity-70 transition-opacity duration-200 text-white md:text-lg">
                                    View Project
                                    <Image
                                        src="/assets/icons/arrow-right.svg"
                                        alt="arrow right"
                                        width={20}
                                        height={20}
                                        className="invert brightness-0 ml-2"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>

                <SwiperSlide className="mb-14">
                    <div className="grid grid-cols-2 gap-4 md:px-16">
                        {ProImages2.map((image) => (
                            <div className="relative group w-[150px] h-[150px] md:w-[450px] md:h-[320px]" key={image.src}>
                                <Link className="absolute z-50" href={image.href}>
                                    <Image
                                        src={image.src}
                                        alt="project image"
                                        width={580}
                                        height={580}
                                        className="rounded-md w-full h-full object-cover"
                                    />
                                </Link>

                                <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hove:opacity-70 transition-opacity duration-200" />
                                <div className="cursor-pointer absolute inset-0 flex items-center justify-cenetr opacity-0 group-hove:opacity-70 transition-opacity duration-200 text-white md:text-lg">
                                    View Project
                                    <Image
                                        src="/assets/icons/arrow-right.svg"
                                        alt="arrow right"
                                        width={20}
                                        height={20}
                                        className="invert brightness-0 ml-2"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProjectSlider