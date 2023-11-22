import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function CustomLoading() {
  return (
    <div className='flex items-center justify-center h-full bg-zinc-800'>
      <span className='text-zinc-300'>
        <AiOutlineLoading3Quarters size={32} className='animate-spin'/>
      </span>
    </div>
  )
}