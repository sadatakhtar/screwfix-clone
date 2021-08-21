import SearchIcon from '@material-ui/icons/Search';

function InputBar() {
    return (
        <div className='flex border p-2 ' >
          <input className='p-4 border-r-2  m-auto outline-none h-10 w-full' type='text' placeholder='What are you looking for?'/>
          <SearchIcon className='mt-2 ml-2' fontSize='medium'/>

      </div>
    )
}

export default InputBar
