// "use client";

// import Image from "next/image";
// import { useState } from "react";

// export default function Unique3DCard() {
//     const [flipped, setFlipped] = useState(false);

//     return (
//         <div
//             className="w-80 h-96 perspective cursor-pointer"
//             onClick={() => setFlipped(!flipped)}
//         >
//             <div
//                 className={`relative w-full h-full duration-700 transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""
//                     }`}
//             >
//                 {/* Old tomon */}
//                 <div className="absolute inset-0 backface-hidden rounded-2xl shadow-xl overflow-hidden">
//                     <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
//                         <div className="relative w-64 h-64 hex-mask">
//                             <Image
//                                 src="/image.png" // bu yerga universitet binosi rasmi qo'yiladi
//                                 alt="University"
//                                 fill
//                                 className="object-cover object-top-right"
//                             />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Orqa tomon */}
//                 <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-xl bg-white p-6 flex flex-col justify-between">
//                     <h3 className="text-lg font-bold text-gray-900">
//                         Malayziyadagi Xiamen Universiteti
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed mt-2">
//                         Xiamen University Malaysia (XMUM) – bu taniqli Xitoy universiteti va
//                         Malayziyadagi birinchi Xitoy universiteti filiali tomonidan tashkil
//                         etilgan birinchi chet el shaharchasi.
//                     </p>
//                     <button className="mt-4 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition">
//                         Batafsil →
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Dark3DTiltCard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center p-10">
            <TiltCard>
                <div className="relative w-80 h-96 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-[0_0_30px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center text-white overflow-hidden">
                    {/* Card Content */}
                    <h2 className="text-2xl font-bold mb-2 text-cyan-400 drop-shadow-md">
                        Dark 3D Tilt Card
                    </h2>
                    <p className="px-6 text-center text-gray-300">
                        Futuristic dark mode card with floating particles
                    </p>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                                initial={{ x: Math.random() * 320, y: Math.random() * 380, opacity: 0 }}
                                animate={{
                                    y: [Math.random() * 380, Math.random() * -50],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 6 + Math.random() * 4,
                                    repeat: Infinity,
                                    delay: Math.random() * 3,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </TiltCard>
        </div>
    )
}

// 3D Tilt Component
function TiltCard({ children }: { children: React.ReactNode }) {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const card = cardRef.current
        if (!card) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            const centerX = rect.width / 2
            const centerY = rect.height / 2
            const rotateX = ((y - centerY) / centerY) * 12
            const rotateY = ((x - centerX) / centerX) * -12

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        }

        const resetTilt = () => {
            card.style.transform = "rotateX(0deg) rotateY(0deg)"
        }

        card.addEventListener("mousemove", handleMouseMove)
        card.addEventListener("mouseleave", resetTilt)

        return () => {
            card.removeEventListener("mousemove", handleMouseMove)
            card.removeEventListener("mouseleave", resetTilt)
        }
    }, [])

    return (
        <div ref={cardRef} className="transition-transform duration-200">
            {children}
        </div>
    )
}
