import { notFound } from "next/navigation"

const programs = [
    { id: 1, title: "Frontend Development", desc: "Learn React, Next.js, TailwindCSS in depth" },
    { id: 2, title: "Backend Development", desc: "Master Node.js, Express, and MongoDB" },
    { id: 3, title: "Mobile Development", desc: "Build apps with React Native and Expo" },
]

export default function ProgramDetailsPage({ params }: { params: { id: string } }) {
    const program = programs.find((p) => p.id === Number(params.id))

    if (!program) {
        return notFound()
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{program.title}</h1>
            <p className="mt-4 text-gray-700">{program.desc}</p>
        </div>
    )
}
