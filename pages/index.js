import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header/Header'
import Selecter from '../components/Header/Selecter'
import SearchIcon from '@material-ui/icons/Search';
import SelecterHolder from '../components/Header/SelecterHolder';
import TopNav from '../components/TopNav/TopNav';
import BottomNav from '../components/BottomNav/BottomNav';
import DeliveryInfo from '../components/DeliveryInfo/DeliveryInfo';
import HeroImage from '../components/HeroImage/HeroImage';


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Screwfix Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <SelecterHolder  Selecter={Selecter}/>
      <TopNav />
      <BottomNav />
      <DeliveryInfo />
      <HeroImage />

     
    </div>
  )
}
