import useStore from "@/app/lib/useStore"
const DiagnosticList = () => {

    const {data} = useStore((state: any) => ({
        data: state.data,
      }))
      const diagnosticList = data[3].diagnostic_list

  return (
    <div className="">
        <h2 className='capitalize text-[#072635] text-2xl font-extrabold'>diagnostic list</h2>

        <table className="mt-10 w-full h-[236px] ">

            <thead className="bg-[#F6F7F8]">
                <tr className="text-[#072635] text-sm font-bold capitalize bg-[#F6F7F8] h-[48px] rounded-3xl text-left ">
                    <th className="pl-4">problem/diagnosis</th>
                    <th>description</th>
                    <th className="rounded-r-2xl">status</th>
                </tr>
            </thead>
            
            
            <tbody className="divide-y">
                {diagnosticList.map((list: any, index: number) => (
                    <tr key={index} className="text-[#072635] text-sm mt-[10px] ">
                        <td className="pl-4">{list.name}</td>
                        <td>{list.description}</td>
                        <td>{list.status}</td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    </div>
  )
}

export default DiagnosticList