import SearchIcon from '@material-ui/icons/Search';

function SelecterHolder({ Selecter }) {
    return (
        <div className='flex justify-evenly border-b'>
            <Selecter Icon={SearchIcon} title='Search'/>
            <Selecter Icon={SearchIcon} title='Search'/>
            <Selecter Icon={SearchIcon} title='Search'/>
            <Selecter Icon={SearchIcon} title='Search'/>
            
        </div>
    )
}

export default SelecterHolder
