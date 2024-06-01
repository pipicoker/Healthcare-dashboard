"use client"
import { useEffect } from "react";
import useStore from "./lib/useStore";
import Navigations from "./ui/header/Navigations";
import Logo from "./ui/header/Logo";
import DoctorProfileAndSetting from "./ui/header/DoctorProfileAndSetting";  
import PatientsList from "./ui/nav/PatientsList";
import PatientProfile from "./ui/aside/PatientProfile";
import LabResults from "./ui/aside/LabResults";
import DiagnosticHistory from "./ui/main/DiagnosticHistory";
import DiagnosticHistoy2 from "./ui/main/DiagnosticHistoy2";
import DiagnosticList from "./ui/main/DiagnosticList";

export default function Home() {
  const {data, error, setData, setError} = useStore((state: any) => ({
    data: state.data,
        error: state.error,
        setData: state.setData,
        setError: state.setError,
  }))

  useEffect(() => {
    const username = process.env.NEXT_PUBLIC_USERNAME;
    const password = process.env.NEXT_PUBLIC_PASSWORD;
    // const auth = Buffer.from(`${username}:${password}`).toString('base64');

    const auth = `Basic ${btoa(`${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`)}`


    const fetchData = async () => {
        try {
            const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
                method: 'GET',
                headers: {
                    // 'Authorization': `Basic ${auth}`
                    'Authorization': ` ${auth}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setData(result);
        } catch (err: any) {
            setError(err.message);
        }
    };

    fetchData();
    }, [setData, setError]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

  return (
    <div className="min-h-screen bg-[#F6F7F8] p-[18px] font-manrope">
      <header className="bg-[#FFFFFF]  py-3 px-8 rounded-[70px] flex justify-between items-center ">     
        <Logo />
        <Navigations />
        <DoctorProfileAndSetting />
      </header>

      <div className="mt-8 grid grid-cols-8 gap-8">
        <nav className="col-span-2">
          <PatientsList />
        </nav>

        <main className="col-span-4 ">
          
          <section className="bg-[#FFFFFF] p-5 rounded-2xl">
            <h2 className="text-[#072635] text-2xl font-extrabold capitalize">diagnostic history</h2>
            
              <DiagnosticHistory />
              <DiagnosticHistoy2 />
          </section>

          <section className="mt-8 bg-[#FFFFFF] rounded-2xl p-5">
            <DiagnosticList />
          </section>
          
        </main>

        <aside className="col-span-2 ">
          
          <PatientProfile />
          <LabResults />
        </aside>

      </div>
            
    </div>
    

  );
}
