import SearchIcon from '@material-ui/icons/Search';
import DehazeIcon from '@material-ui/icons/Dehaze';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function SelecterHolder({ Selecter }) {
    return (
        <div className='flex justify-evenly border-b'>
            <Selecter Icon={DehazeIcon} title='Browse'/>
            <Selecter Icon={SearchIcon} title='Search'/>
            <Selecter Icon={LocationOnIcon} title='Stores'/>
            <Selecter Icon={ShoppingBasketIcon} title='Checkout'/>
            
        </div>
    )
}

export default SelecterHolder
