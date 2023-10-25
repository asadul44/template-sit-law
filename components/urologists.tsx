import type { NextPage } from "next";

type Urologists1Type = {
  icon?: string;
  tittle?: string;
  description?: string;
};

const Urologists: NextPage<Urologists1Type> = ({
  icon,
  tittle,
  description,
}) => {
  return (
    <div className="rounded-xl bg-gray-100 flex flex-col py-9 px-[37px] box-border items-start justify-start gap-[21px] text-left text-17xl text-white font-eastman-roman-trial">
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <img className="relative w-[71.29px] h-[71.29px]" alt="" src={icon} />
        <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
          <div className="self-stretch relative">{tittle}</div>
          <div className="self-stretch relative text-xl tracking-[0.02em] leading-[156%] font-medium">
            <p className="m-0">{description}</p>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-3xs bg-white flex flex-row py-3.5 px-5 items-center justify-center text-center text-5xl text-deepskyblue">
        <div className="flex-1 relative text-gray-100">Learn More</div>
      </div>
    </div>
  );
};

export default Urologists;
