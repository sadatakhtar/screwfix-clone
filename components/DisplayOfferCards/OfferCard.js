import Image from "next/image" 

function OfferCard({ Icon, price, description, newPrice, oldPrice}) {
    return (
        <div className='flex-grow border-2 mt-5 flex-col sm:mx-40'>
            <div className='flex p-5 relative text-[#d32f4a] font-bold tracking-tighter'>
            <div className=''>
                <h1 className='text-4xl sm:text-6xl sm:font-extrabold'>SAVE<br />{price}</h1>
                <p className='font-normal text-xs sm:text-sm'>{description}</p>
            </div>
            <div className='pt-5 '>
                <Image 
                src={Icon} 
                width={300} 
                height={200}
                objectFit='contain'/>
            </div>

            </div>
             <div className='bg-[#d22d41] h-33 p-3 text-white'>
                 <p className='font-medium text-xs'>ONLY</p>
                 <p className='font-extrabold text-2xl'><span className='text-sm '>£</span>{newPrice}
                 <span className='text-xs font-normal'> INC VAT</span> </p>
                 <p className='font-medium text-xs'>was {oldPrice}</p>
             </div>
           
            
        </div>
    )
}

export default OfferCard
