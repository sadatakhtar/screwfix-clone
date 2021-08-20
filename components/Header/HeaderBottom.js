import { Switch } from "@material-ui/core";
import Image from "next/image";
import screwfixLogo from "../../assets/screwfixLogo.png";
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function HeaderBottom() {
  return (
    <div className="flex bg-white justify-between items-center p-2">
      <div className="flex">
        <Image src={screwfixLogo} width={220} height={80} objectFit="cover"/>
      </div>

      <div className='flex justify-evenly space-x-5  m-2 p-2'>
          <div className='flex justify-center items-center space-x-2 border-l-2'>
              <PersonIcon color={"primary"} fontSize={"large"}/>
              <div>
                  <h3 className='text-blue-900 font-bold'>Your Account</h3>
                  <h4 className='text-xs'>Sign in / Reg...</h4>
              </div>
          </div>
          <div className='flex justify-center items-center space-x-2 border-l-2'>
          <LocationOnIcon color={"primary"} fontSize={"large"}/>
              <div>
                  <h3 className='text-blue-900 font-bold'>Store Locator</h3>
                  <h4 className='text-xs'>Select a store</h4>
              </div>
          </div>
          <div className='flex flex-col justify-center items-center space-x-2 border-l-2'>
          <ShoppingBasketIcon color={"primary"} fontSize={"large"}/>
              <div>
                  <h3 className='text-blue-900 font-bold'>Checkout</h3>
        
              </div>
          </div>
      </div>

      <div className="flex bg-white text-blue-900 text-sm font-bold sm:hidden">
        <div className="pb-7">
          <h3>INC</h3>
          <h3>VAT</h3>
        </div>

        <Switch
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <div>
          <h3>EX</h3>
          <h3>VAT</h3>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
