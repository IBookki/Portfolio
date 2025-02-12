import Image from 'next/image'
import css from './not-found.module.css'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)]">
      
      <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>

      <Image className={css.image} 
                            src="/bullet-train.jpg" 
                            width={0} 
                            height={0} 
                            sizes="100vw" 
                            style={{ width: '50vh', height: 'auto' }} 
                            priority 
                            alt="Sass project cover"></Image>
                            
      <p className=" mt-3 text-2xl mb-8 font-semibold">You shouldn't be here</p>
      

    </div>
  )
}