import Image from "next/image"

export const Logo = ()=>{
    return (
        <div className="relative w-[35px] h-[40px]">
            <Image 
            className="black:hidden"
            src="/black-logo.png"
            fill
            alt="logo"
            />
            <Image 
            
            src="/white-logo.png"
            fill
            alt="logo"
            />
        </div>
    )
}