import InputBar from "../InputBar/InputBar";
import DehazeIcon from "@material-ui/icons/Dehaze";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function TopNav() {
  return (
    <div className="flex justify-evenly hidden  sm:flex flex-grow pr-5 pt-2 lg:hidden">
      <div className=' flex px-5 mx-5 rounded-xl'>
        <button className='bg-[#e5e5e5] pr-9 rounded-xl text-[#636363] font-bold text-lg'>
          <span className='px-2'>
            <DehazeIcon style={{ fill: '#636363', paddingBottom: '3'}} fontSize='large'/>
          </span>
          Browse
          <span className='pl-9'>
            <ArrowDropDownIcon fontSize='large'/>
          </span>
        </button>
      </div>

      <div className="flex-1">
        <InputBar />
      </div>
    </div>
  );
}

export default TopNav;
