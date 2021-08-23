import OfferCard from "./OfferCard";
import Image from "next/dist/client/image";
import drillPic from '../../assets/drill.webp'
import mill from '../../assets/mil.webp'
import dewalt from '../../assets/dewalt.webp'
import tray from '../../assets/tray.webp'

function DisplayOfferCards() {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-2'>
      <OfferCard
        Icon={drillPic}
        price="£50.00"
        description="ON SELECTED TWIN PACKS"
        newPrice='100.00'
        oldPrice='£150.00'
      />

<OfferCard
        Icon={mill}
        price="£100.00"
        description="ON THIS MILWAUKEE 18V 5.0AH 6 PIECE KIT"
        newPrice='799.99'
        oldPrice='£899.99'
      />

<OfferCard
        Icon={dewalt}
        price="£50.00"
        description="ON THIS DEWALT 2 X 4.0AH BRUSHLESS COMBI"
        newPrice='149.99'
        oldPrice='£199.99'
      />

<OfferCard
        Icon={tray}
        price="£50.00"
        description="ON THIS MILWAUKEE PACKOUT 3PC SET"
        newPrice='219.99'
        oldPrice='£269.99'
      />
    </div>
  );
}

export default DisplayOfferCards;
