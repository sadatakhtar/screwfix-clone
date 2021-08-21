import { Switch } from "@material-ui/core";
import Image from "next/image";
import screwfixLogo from "../../assets/screwfixLogo.png";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import Selecter from "./Selecter";
import InputBar from "../InputBar/InputBar";

function HeaderBottom() {
  return (
    <div className="flex bg-white justify-between items-center md:px-20 md:border-b p-2">
      <div className="flex ">
        <Image src={screwfixLogo} width={290} height={80} objectFit="cover" />
      </div>
      <div className='hidden md:flex'>
        <InputBar />
      </div>

      <div className="flex justify-evenly space-x-5   hidden sm:flex">
        <div className="flex justify-center items-center space-x-2 border-l-2 md:flex-col md:m-3 md:ml-40">
          <PersonIcon style={{ fill: "#0053a0" }} fontSize={"large"} />
          <div>
            <h3 className="text-[#0053a0] font-bold">Your Account</h3>
            <h4 className="text-xs text-[#636363]">Sign in / Reg...</h4>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-2 border-l-2 md:flex-col md:m-3">
          <LocationOnIcon style={{ fill: "#0053a0" }} fontSize={"large"} />
          <div>
            <h3 className="text-[#0053a0] font-bold">Store Locator</h3>
            <h4 className="text-xs text-[#636363]">Select a store</h4>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-x-2 border-l-2 flex-grow md:m-3 md:pr-20">
          <ShoppingBasketIcon style={{ fill: "#0053a0" }} fontSize={"large"} />
          <div>
            <h3 className="text-[#0053a0] font-bold md:mt-">Checkout</h3>
          </div>
        </div>
      </div>

      <div className="flex bg-white text-blue-900 text-sm font-bold sm:hidden">
        <div className="text-xs pb-7 text-[#0053a0]">
          <h3>INC</h3>
          <h3>VAT</h3>
        </div>

        <Switch
          defaultChecked
          color="default"
          inputProps={{ "aria-label": "checkbox with default color" }}
        />
        <div className="text-[#0053a0] text-xs">
          <h3>EX</h3>
          <h3>VAT</h3>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default HeaderBottom;
