import Image from 'next/image'
// import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
// import QuestionMarkCircle from '../../assets/questionMarkCircle.png'
import Switch from '@material-ui/core/Switch'; 
import PersonIcon from '@material-ui/icons/Person';

function HeaderTop() {
    return (
        <div className='flex justify-between  bg-[#0053a0]'>
            <div className='flex text-white p-2 hidden sm:flex'>
                <h3 className='font-bold text-sm '>Need Help</h3>
                <img
                    className='object-contain rounded-full ml-1' 
                    src='https://res.cloudinary.com/dstsblg8x/image/upload/v1629407495/questionMarkCircle_fkuvc0.png' 
                    width={20} 
                    height={20}
                    alt='question mark'
            />
            </div>
            <div className='flex justify-center items-center text-white font-bold text-sm mr-2 hidden sm:flex'>
                <h3>INC VAT</h3>
                <Switch
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
                
                <h3>EX VAT</h3>
            </div>
            <div className='flex justify-center items-center pl-2 sm:hidden'>
                <PersonIcon color="action" fontSize="small"/>
                <h3 className='text-white text-xs p-2 '>sign in / Regi...</h3>
            </div>
           
            
        </div>
    )
}

export default HeaderTop
