import Image from 'next/image'

function HeroImage() {
    return (
        <div className=' pt-5 lg:mx-44 lg:mt-3'> 
            <img 
                src={'https://res.cloudinary.com/dstsblg8x/image/upload/v1629632730/screwfixhero_aludpg.webp'}
                objectFit='contain'
                alt='hero'
                />
            
        </div>
    )
}

export default HeroImage
