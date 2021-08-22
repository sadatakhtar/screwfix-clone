import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function DeliveryInfo() {
  return (
    <div
      className="bg-[#df2027] text-white flex flex-col 
    justify-center items-center p-4 tracking-tighter
    leading-3 sm:flex-row "
    >
      <h5 className="text-lg text-center">
        Order online or in store today -
        <br className="sm:hidden" />
        <span className=" font-bold text-lg space-x-0">
          Delivery information
          <ArrowRightIcon fontSize="large" />
          <ArrowRightIcon fontSize="large" />
          <ArrowRightIcon fontSize="large" />
        </span>
      </h5>
    </div>
  );
}

export default DeliveryInfo;
