import useStore from '@/app/lib/useStore';
import BloodPressureInfo from './reusableComponents/BloodPressureInfo';
import Image from 'next/image';
import expand from '@/public/HealthCare Dashboard/expand_more_FILL0_wght300_GRAD0_opsz24.svg'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DiagnosticHistory = () => {


    const {data} = useStore((state: any) => ({
        data: state.data,
      }))
      const jessicaHistory = data[3].diagnosis_history

      // chart labels, used only the first 6 items and converted to 3 lettters
      const labels = jessicaHistory.slice(0, 6).map((item: any)  => `${item.month.slice(0, 3)} ${item.year}`)

      // dataset 1, used only the first 6 items 
      const dataset1 = jessicaHistory.slice(0, 6).map((item: any) => item.blood_pressure.systolic.value)

      // dataset 2, used only the first 6 items 
      const dataset2 = jessicaHistory.slice(0, 6).map((item: any) => item.blood_pressure.diastolic.value)

     

      const Data = {
        labels: labels,

        datasets: [
          {
            label: "Systolic",
            data: dataset1,
            fill: false,
            borderColor: "#C26EB4",
            tension: 0.5
          },

          {
            label: "Diastolic",
            data: dataset2,
            fill: false,
            borderColor: "#7E6CAB",
            tension: 0.5
          },
        ]
      }

      // To make configuration
  const options = {
    scales: {
      y: {
        title: {
          display: false,
        },
        display: true,
        ticks: {
          color: '#072635',
          font: {
            size: 12,
          }
        }
        
      },
      x: {
        title: {
          display: false,
        },
        display: true,
        grid: {
          display: false
        },
        ticks: {
          color: '#072635',
          font: {
            size: 12,
          }
        }
      },
    },
    
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false 
      },
      legend: {
        display: false
      },
      
    },
    
  };

  return (
    <figure className='h-[298px] grid grid-cols-8  gap-9 bg-[#F4F0FE] mt-10 p-4 rounded-xl'
    onClick={() => console.log(data)
    }>
      <div className='col-span-5 '>
        
        <div className='flex justify-between items-center '>
          <p className='text-[#072635] text-lg font-bold capitalize'>blood pressure</p>

          <div className='flex items-center gap-4'>
            <p className='text-[#072635] text-sm leading-[19px] capitalize'>last 6 months</p>

            <Image src={expand}
            alt='expand icon' />
          </div>
          
        </div>

        <div className='pt-5   '>
          <Line 
          data={Data} options={options} height={220}/>
        </div>
        
      </div>
        
      <div className='col-span-3 divide-y '>

        <div className='pb-[16.5px]'>
          <BloodPressureInfo 
          title='Systolic' value={jessicaHistory[0].blood_pressure.systolic.value} levels={jessicaHistory[0].blood_pressure.systolic.levels}/>
        </div>
        
        <div className='pt-[16.5px]'>
          <BloodPressureInfo title='Diastolic' value={jessicaHistory[0].blood_pressure.diastolic.value} levels={jessicaHistory[0].blood_pressure.diastolic.levels}/>
        </div>
        
      </div>

    </figure>
  )
}

export default DiagnosticHistory