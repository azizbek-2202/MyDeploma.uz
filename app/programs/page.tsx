import Link from "next/link"

const programs = [
    { id: 1, title: "Frontend Development", desc: "React, Next.js, Tailwind" },
    { id: 2, title: "Backend Development", desc: "Node.js, Express, MongoDB" },
    { id: 3, title: "Mobile Development", desc: "React Native, Expo" },
]

export default function ProgramsPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Programs</h1>
            <ul className="space-y-3">
                {programs.map((program) => (
                    <li key={program.id} className="border p-4 rounded-md">
                        <h2 className="text-lg font-semibold">{program.title}</h2>
                        <p className="text-gray-600">{program.desc}</p>
                        <Link
                            href={`/programs/${program.id}`}
                            className="text-blue-600 hover:underline"
                        >
                            View Details →
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
