import Image from "next/image"
import hero from '../../assets/screwfixhero.webp'


function HeroImage() {
    return (
        <div className=' pt-5 lg:mx-60 lg:mt-3 '> 
            <Image className=''
                src={hero}
                // width={2000}
                objectFit='contain'
                alt='hero'
                />
            
        </div>
    )
}

export default HeroImage
