import React from 'react'
import useStore from '@/app/lib/useStore'
import Image from 'next/image'
import search from '../../../public/HealthCare Dashboard/search_FILL0_wght300_GRAD0_opsz24.svg'
import more from '../../../public/HealthCare Dashboard/more_horiz_FILL0_wght300_GRAD0_opsz24.svg'

const PatientsList = () => {

    const {data} = useStore((state: any) => ({
        data: state.data,
      }))


  return (

    <div className=' bg-[#FFFFFF] pt-5  rounded-2xl '>
        <div className='flex justify-between items-center pl-5 pr-[30px]'>
            <h2 className='uppercase text-2xl  font-extrabold text-[#072635]'>patients</h2>

            <div className='relative '>
                <Image src={search} alt='search icon' />
            </div>
            
        </div>

        <div className='scrollbar mt-5 grid h-[982px] overflow-y-auto '>
            {data.map((patient: any, index: number) => (
                <div key={index} className={`flex items-center justify-between pl-5 pr-[30px] py-[19px] mb-[19px] ${index == 3 ? "bg-[#D8FCF7] " : 'bg-none  '}`}>
                    
                   <div className='flex items-center space-x-3'>
                        <img src={patient.profile_picture} alt="patients image"  height={48} width={48}/>

                        <div className='text-sm leading-[19px]'>
                            <p className='font-bold text-[#072635]'>{patient.name}</p>
                            <p className='text-[#707070]'>{patient.gender}, {patient.age}</p>
                        </div>
                   </div>

                   <Image src={more} alt='horizontal more icon' width={18} height={4}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PatientsList