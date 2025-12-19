import React, { ReactNode } from 'react'
import { TTier } from './type'

import Image from 'next/image'

import Clock from '@/aseets/icons/clock';
import People from '@/aseets/icons/People';
import BadgeCheckmark from '@/aseets/icons/badge-checkmark';
import { RouterBack } from '../Modal';


export function ContentTier({ cta, data, isPriceShown, ctaIsBack }: { packageSlug: string, data: TTier; isPriceShown: boolean; ctaIsBack?: boolean; cta?: ReactNode }) {
    return (
        <div className="
  flex flex-col gap-y-4 h-full bg-white p-6 rounded-3xl 
  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] 
  hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]
  transition-all duration-300
">
            <div className="flex gap-x-4 items-center">
                <figure className="w-24 h-24 relative flex-none rounded-xl overflow-hidden">
                    <Image
                        src={data.photo}
                        alt={data.name}
                        fill
                        priority
                        unoptimized
                        className="object-cover"
                    />
                </figure>
                <div className="flex flex-col">
                    <h2 className="font-bold text-xl text-gray-800">{data.name}</h2>
                    <p className="text-gray-500 text-sm">{data.tagline}</p>
                </div>
            </div>

            <hr className="border-gray-100" />

            <ul className="flex flex-col gap-y-3">
                {data.benefits.map((benefit, index) => (
                    <li className="flex items-center gap-x-3" key={index}>
                        <span className="text-green-500">
                            <BadgeCheckmark />
                        </span>
                        <span className="font-medium text-gray-700">{benefit}</span>
                    </li>
                ))}
            </ul>

            {
                isPriceShown &&
                <>
                    <hr className="border-gray-100" />

                    <div className="flex flex-col gap-y-3">
                        <p className="font-bold text-2xl text-gray-900">Rp{data.price}</p>
                        <div className="flex items-center gap-x-4">
                            <span className="flex items-center gap-x-2 text-sm text-gray-500">
                                <Clock />
                                <span>
                                    {data.duration} 
                                </span>
                            </span>

                            <span className="flex items-center gap-x-2 text-sm text-gray-500">
                                <People />
                                <span>{data.quantity} People</span>
                            </span>
                        </div>
                    </div>

                    <hr className="border-gray-100" />
                </>
            }

            {
                !!ctaIsBack && <RouterBack
                    className="w-full py-3 mt-auto rounded-full font-semibold text-center border border-gray-600 text-gray-700 bg-gray-100 hover:bg-amber-500 hover:text-white transition-colors duration-300">
                    Close
                </RouterBack>
            }

            {
                !ctaIsBack && cta
            }

        </div>


    )
}