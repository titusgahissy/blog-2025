import { cn } from "@/lib/utils"
import { PlusIcon } from "lucide-react"

interface Props {
  className?: string
}

// className="absolute top-0 left-0 -translate-x-3.5 -translate-y-3.5" 
// className="-translate-x-5 mb-4" 
// className="absolute top-0 left-0 -translate-x-3.5 -translate-y-3.5" 
export const PlusIconDivider = ({ className }: Props) => (
  <PlusIcon className={cn("text-neutral-500 size-10 md:size-12 -translate-x-3 md:-translate-x-5 mb-4", className)} strokeWidth={0.6} />
)