import { TextAnimate } from "../components/magicui/text-animate"
import { JobCard } from "../components/ui/job-card"
import { jobsData } from "../data/jobs-data"
import { CareersPerksSection } from "../components/ui/careers-perks-section"
import { useState } from "react"

export function CareersPage () {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    
    // Get unique categories
    const categories = ["All", ...Array.from(new Set(jobsData.map(job => job.category).filter((category): category is string => Boolean(category))))];
    
    // Filter jobs by selected category
    const filteredJobs = selectedCategory === "All" 
        ? jobsData 
        : jobsData.filter(job => job.category === selectedCategory);


    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <div className="text-center items-center justify-center flex flex-col pt-40 pb-20">
                <p className="text-2xl md:text-4xl font-bold mb-2"> Why work with us? </p>

                <TextAnimate className="text-gray-500 max-w-3xl mx-auto">
                    Choosing the right partner is as important as choosing the right technology. At Zestrics, we don't just deliver services, we build long-term partnerships that create measurable business impact.
                </TextAnimate>
            </div>

            {/* Careers Perks Section */}
            <CareersPerksSection />

            {/* Category Filter */}
            <div className="max-w-6xl mx-auto px-4 mb-12">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                selectedCategory === category
                                    ? "bg-blue-500 shadow-lg shadow-blue-500/25"
                                    : "bg-white/10"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Jobs List */}
            <div className="max-w-4xl mx-auto px-4 pb-20">
                <div className="space-y-4">
                    {filteredJobs.map((job, index) => (
                        <JobCard
                            key={`${job.title}-${index}`}
                            job={job}
                        />
                    ))}
                </div>

                {/* No jobs message */}
                {filteredJobs.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-700 text-lg">
                            No positions available in this category at the moment.
                        </p>
                        <p className="text-gray-700 text-sm mt-2">
                            Check back later or contact us for more opportunities.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}