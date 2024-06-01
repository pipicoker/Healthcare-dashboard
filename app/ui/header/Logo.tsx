import Image from "next/image";
import logo from '../../../public/HealthCare Dashboard/TestLogo.svg'

const Logo = () => {
  return (
    <div className="">
        <Image 
        src={logo} 
        alt="logo image"
        width={211}
        height={48} 
        priority/>
        
    </div>
  )
}

export default Logo