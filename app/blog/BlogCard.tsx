'use client'

import Image from "next/image";
import { Calendar, Clock, Eye } from "lucide-react";

interface BlogCardProps {
    image: string;
    date: string;
    time: string;
    views: number;
    title: string;
    description: string;
}

const BlogCard = ({ image, date, time, views, title, description }: BlogCardProps) => {
    return (
        <div className="bg-white xl:w-[397px] xl:h-[540px] relative shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
            {/* Image */}
            <div className="w-full h-56 relative">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6 justify-between">
                <div>
                    {/* Meta info */}
                    <div className="flex items-center gap-6 text-gray-500 text-sm mb-3">
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{time}, {date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Eye size={16} />
                            <span>{views}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-4">
                    <button className="w-14 h-14 flex items-center justify-center rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition">
                        →
                    </button>
                </div>
            </div>
        </div>


    );
};

export default BlogCard;
