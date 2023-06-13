import Image from 'next/image';
function Navbar() {
  return (
    <div className=''
    style={{background: "#a6a6a6"}}>
      <Image
              priority
              src="/images/Avatar.jpeg"
              className=""
              height={100}
              width={100}
              alt="Logo"
            />
    </div>
  )
}

export default Navbar