import Image from 'next/image'

import respiratory from '@/public/HealthCare Dashboard/respiratory rate.svg'
import temperature from '@/public/HealthCare Dashboard/temperature.svg'
import heart from '@/public/HealthCare Dashboard/HeartBPM.svg'
import arrow from '@/public/HealthCare Dashboard/ArrowDown.svg'

interface InfoProps {
    title: string
    value: number
    symbol: string
    levels: string
}


const DiagnosticHistory2Info: React.FC<InfoProps> = ({title, value, symbol, levels}) => (
    <div className={`rounded-xl p-4 text-[#072635] 
    ${
        title === 'Respiratory Rate' ? 'bg-[#E0F3FA]' : title === 'Temperature' ? 'bg-[#FFE6E9]' : 'bg-[#FFE6F1]'
    }`}>
        <div>
            {
                 title === 'Respiratory Rate' ? (
                    <Image src={respiratory} alt='respiratory image'/>
                 )  :
                 title === 'Temperature' ? (
                    <Image src={temperature} alt='temperature image'/>
                 ) :
                 (
                    <Image src={heart} alt='heart image'/>
                 )
            }
        </div>

        <p className='pt-4 leading-[22px]'>{title}</p>
        <p className='text-[30px] leading-[41px] font-extrabold'>{value} {symbol}</p>
        <div className='pt-4'>
            
            {levels === "Lower than Average" ? (
                <div className='flex items-center space-x-2'>
                    <Image src={arrow} alt='arrow icon'
                />
                <p className='text-sm leading-[19px]'>{levels} </p>
                </div>
                
            ) : (
                <p className='text-sm leading-[19px]'>{levels} </p>
            )}
            
            
        </div>
        
    </div>
)

export default DiagnosticHistory2Info