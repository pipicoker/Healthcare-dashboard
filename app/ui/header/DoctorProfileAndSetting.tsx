import React from 'react'
import Image from 'next/image'
import doctor from '../../../public/HealthCare Dashboard/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.jpg'
import setting from '../../../public/HealthCare Dashboard/settings_FILL0_wght300_GRAD0_opsz24.svg'
import more from '../../../public/HealthCare Dashboard/more_vert_FILL0_wght300_GRAD0_opsz24.svg'

const DoctorProfileAndSetting = () => {
  return (
    <div className='flex divide-x space-x-3'>
        <div className='flex space-x-2'>
            <Image src={doctor} 
            alt="doctor's image" 
            width={0} 
            height={0} 
            style={{width:'auto', height: "44" }}
            priority />

            <div className='text-sm leading-[19px]'>
                <p className='text-[#072635] font-bold '>Dr Jose Simmons</p>
                <p className='text-[#707070] '>General Practioner</p>
            </div>

        </div>

        <div className=' flex pl-3 space-x-3 items-center'>
          <div className='relative'>
            <Image src={setting} alt='setting icon' />
          </div>
            
              <Image src={more} alt='more icon'
              height={0}
              width={0}
              style={{width:'auto', height: "18" }}/>
            
        </div>
        
    </div>
  )
}

export default DoctorProfileAndSetting