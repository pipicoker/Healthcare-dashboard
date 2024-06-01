import Image from "next/image";
import arrowUp from '@/public/HealthCare Dashboard/ArrowUp.svg'
import arrowDown from '@/public/HealthCare Dashboard/ArrowDown.svg'
interface BloodPressureInfoProps {
    title: string;
    value: number;
    levels: string;
  }

const BloodPressureInfo: React.FC<BloodPressureInfoProps> = ({ title, value, levels }) => (
    <div className="text-[#072635] ">

        <div className="flex items-center space-x-1">
            <div className={`w-[14px] h-[14px] rounded-full  ${title == 'Systolic' ? 'bg-[#E66FD2]' : 'bg-[#8C6FE6]'}`}></div>
            <p className="text-sm  font-bold">{title}</p>
        </div>
      
      <p className="text-[22px] font-bold">{value}</p>

      <div className="flex space-x-2 items-center">
        {value == 160 ? (
            <Image src={arrowUp} alt="arrow up icon" />
        ) : (
            <Image src={arrowDown} alt="arrow up icon" />
        )}
        <p className="">{levels}</p>
      </div>
      
    </div>
  );
  
  export default BloodPressureInfo;