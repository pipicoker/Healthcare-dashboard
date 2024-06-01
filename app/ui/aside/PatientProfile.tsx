import Image from "next/image"
import useStore from "@/app/lib/useStore"

import calender from '../../../public/HealthCare Dashboard/BirthIcon.svg'
import gender from '../../../public/HealthCare Dashboard/FemaleIcon.svg'
import phone from '../../../public/HealthCare Dashboard/PhoneIcon.svg'
import insurance from '../../../public/HealthCare Dashboard/InsuranceIcon.svg'

const PatientProfile = () => {

    const {data} = useStore((state: any) => ({
        data: state.data,
      }))

      const jessicaData = data[3]


  return (
    <section className="bg-[#FFFFFF] rounded-2xl  py-8 "
    onClick={() => console.log(jessicaData)}>

        <div className="grid gap-6 justify-center text-center">
            <img src={jessicaData.profile_picture}
            alt="jessica's profile picture" 
            width={200}
            height={200}/>
            <p className="text-2xl text-[#072635] font-extrabold ">{jessicaData.name}</p>          
        </div>
        

        <div className="pl-5 mt-8 grid gap-6">

            <div className="flex items-center space-x-4">
                <div>
                    <Image src={calender}
                    alt="icon"/>
                </div>

                <div className="text-sm text-[#072635] leading-[19px] capitalize">
                    <p>Date of Birth</p>
                    <p className="font-bold">{jessicaData.date_of_birth}</p>
                </div>
            </div>

           
            <div className="flex items-center space-x-4">
                <div>
                <Image src={gender}
                    alt="icon"/>
                </div>

                <div className="text-sm text-[#072635] leading-[19px] capitalize">
                    <p>Gender</p>
                    <p className="font-bold">{jessicaData.gender}</p>
                </div>
            </div>

            
            <div className="flex items-center space-x-4">
                <div>
                <Image src={phone}
                    alt="icon"/>
                </div>

                <div className="text-sm text-[#072635] leading-[19px] capitalize">
                    <p>DContact Info</p>
                    <p className="font-bold">{jessicaData.phone_number}</p>
                </div>
            </div>
            
            
            <div className="flex items-center space-x-4">
                <div>
                <Image src={phone}
                    alt="icon"/>
                </div>

                <div className="text-sm text-[#072635] leading-[19px] capitalize">
                    <p>Emergency contact</p>
                    <p className="font-bold">{jessicaData.emergency_contact}</p>
                </div>
            </div>
           
           
            <div className="flex items-center space-x-4">
                <div>
                <Image src={insurance}
                    alt="icon"/>
                </div>

                <div className="text-sm text-[#072635] leading-[19px] capitalize">
                    <p>Insurance Provider</p>
                    <p className="font-bold">{jessicaData.insurance_type}</p>
                </div>
            </div>
        </div>

        <div className="mt-7 pt-3 flex justify-center">
            <button className="bg-[#01F0D0] rounded-[41px] w-[220px] h-[41px] text-[#072635] text-sm font-bold capitalize">show all information</button>
        </div>
    </section>
  )
}

export default PatientProfile