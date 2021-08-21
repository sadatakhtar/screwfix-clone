import Image from 'next/image'

function Selecter({ Icon, title}) {
    return (
        <div className='flex flex-grow flex-col justify-center items-center border-r-2 p-2 mb-2  hover:cursor-pointer sm:hidden'>
            <Icon fontSize='large' style={{ fill: "#0053a0"}}/>
            <h4 className='text-[#0053a0]'>{title}</h4>
            
        </div>
    )
}

export default Selecter

