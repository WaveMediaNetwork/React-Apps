import Image from "next/image";

export default function HomeMenu() {
    return (
        <section className="">
            <div className="h-48 absolute w-48 left-0">
                <Image src={'/salad1.png'}  layout={'fill'} objectFit={'contain'} alt={'salad'}/>
            </div>
            <div className="h-48 absolute w-48 right-0">
                <Image src={'/salad2.png'}  layout={'fill'} objectFit={'contain'} alt={'salad'}/>
            </div>
            <div className="text-center"></div>
            <h3 className="uppercase text-gray-500 font-semibold leading-4">Checkout</h3>
            <h2 className="text-primary font-bold text-4xl">Menu</h2>
        </section>

    );
}