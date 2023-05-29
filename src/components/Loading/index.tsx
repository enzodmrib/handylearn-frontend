import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
  return (
    <div className='flex items-center justify-center h-full'>
      <span className='text-zinc-300'>
        <AiOutlineLoading3Quarters size={32} className='animate-spin'/>
      </span>
    </div>
  )
}