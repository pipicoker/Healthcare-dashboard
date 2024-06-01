import Image from 'next/image'
import useStore from '@/app/lib/useStore'
import download from '../.././../public/HealthCare Dashboard/download_FILL0_wght300_GRAD0_opsz24 (1).svg'

const LabResults = () => {

    const {data} = useStore((state: any) => ({
        data: state.data,
      }))
      const jessicaLabs = data[3].lab_results

  return (
    <section className='mt-8  p-5 bg-[#FFFFFF] rounded-2xl'>
        <h2 className='text-[#072635] text-2xl leading-[33px] font-extrabold capitalize'>lab results</h2>

        <div className='mt-4 pl-[10px] '>
            <ul className='grid gap-2'>
                {jessicaLabs.map((labs: string, index: number) => (
                    <li key={index} className={`flex justify-between items-center py-[11px] pl-2 pr-4 ${index === 1 ? 'bg-[#F6F7F8]' : 'bg-none'}`}>

                        <p className='text-[13px] leading-[18px]'>{labs}</p>
                        <Image src={download}
                        alt='download icon' />

                    </li>
                ))}
            </ul>
            
        </div>
    </section>
  )
}

export default LabResults