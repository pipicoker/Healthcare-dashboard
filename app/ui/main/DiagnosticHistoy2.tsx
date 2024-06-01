import useStore from '@/app/lib/useStore'
import DiagnosticHistory2Info from './reusableComponents/DiagnosticHistory2Info'


const DiagnosticHistoy2 = () => {

    const {data} = useStore((state: any) => ({
        data: state.data,
      }))
      const jessicaHistory = data[3].diagnosis_history


  return (
    <div className='mt-5 grid grid-cols-3 gap-5'>
        <DiagnosticHistory2Info  title='Respiratory Rate' value={jessicaHistory[0].respiratory_rate.value} levels={jessicaHistory[0].respiratory_rate.levels} symbol='bpm'/>

        <DiagnosticHistory2Info  title='Temperature' value={jessicaHistory[0].temperature.value} levels={jessicaHistory[0].temperature.levels} symbol='°F'/>

        <DiagnosticHistory2Info  title='Heart Rate' value={jessicaHistory[0].heart_rate.value } levels={jessicaHistory[0].heart_rate.levels} symbol='bpm'/>
    </div>
  )
}

export default DiagnosticHistoy2