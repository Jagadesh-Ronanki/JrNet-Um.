import { cn } from "@/lib/utils"

const Title = ({title, className}) => {
  return (
    // <div className={`gap-[1/-1] border-b-[0.1px] border-b-stone-700 bg-black ${sticky ? 'sticky top-[79px] z-10' : ''}`}>
    <div className={cn('gap-[1/-1] border-b-[0.1px] border-b-stone-700 bg-black', className)}>
      <div className="max-md:justify-center flex justify-between items-center px-12 py-6 w-full min-h-20 mt-[-1px]">
        <h2 className="font-semibold text-2xl">{title}</h2>
      </div>
    </div>
  )
}

export default Title