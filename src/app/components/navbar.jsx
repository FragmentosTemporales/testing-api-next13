import Image from 'next/image';
import Link from 'next/link';
function Navbar() {
  return (
    <div className='d-flex justify-content-center shadow sticky-top'
    style={{background: "#a6a6a6"}}>
      <Link href="/"><Image
              priority
              src="/images/Avatar.jpeg"
              className=""
              height={100}
              width={100}
              alt="Logo"
            /></Link>
      
    </div>
  )
}

export default Navbar