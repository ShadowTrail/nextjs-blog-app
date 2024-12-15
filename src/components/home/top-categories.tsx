import { categories } from "@/lib/placeholder-data"
import { Button } from "../ui/button"
import Link from "next/link"

export default function TopCategories() {
    return(
        <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
            {categories.map((category) => (
                <Button key={category} variant={"secondary"} className="hover:scale-110 transition-all]" asChild>
                    <Link href={`/blog/${category}`}>{category}</Link>
                </Button>
            ))}
        </div>
    )
}