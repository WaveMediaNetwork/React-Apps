import Image from "next/image"

export default function Hero() {

    return(
    <section className="hero">
        <div className="py-12">
         <h1 className="text-4xl font-semibold">Everything <br/> is better <br/> with <span className="text-primary">DISM</span></h1>
         <p className="my-4 text-gray-500 text-sm">Digital Integrated Smart Menu</p>
         <div className="flex gap-4 text-sm ">
             <button className="bg-primary uppercase flex gap-2 text-white rounded-full px-4 py-2 items-center">Order Now</button>
             <button className="flex gap-2 py-2 text-gray-600 font-semibold">Learn More</button>
         </div>
        </div>
    
        <div className="relative">
         <Image src={'/dismBlack.png'} layout={'fill'} objectFit={'contain'} alt={'dism'} />
        </div>
    
    </section>
    );
}