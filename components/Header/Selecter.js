import Image from 'next/image'

function Selecter({ Icon, title}) {
    return (
        <div className='flex flex-col justify-center items-center border-r-2 p-2 mb-2'>
            <Icon/>
            <h4>{title}</h4>
            
        </div>
    )
}

export default Selecter

