

import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return(
        <header className="max-w-[1920px] w-full m-auto h-16 bg-gradient-to-r from-pink-background to-blue-background flex justify-around items-center">
            <div>
                <Link href={'/'}>
                    <h1 title="Context Store" className="text-2xl font-bold">Context Store</h1>
                </Link>
            </div>

            <div>
                <input type="text"  className="w-[350px] rounded-md outline-none p-1 focus:border border-solid border-blue-950"/>
            </div>

            <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full absolute left-7 -top-[2px] flex flex-center justify-center">
                    <p className="text-white text-xs font-bold">1</p>
                </div>
                <Link href={'/'} title="Saved itens">
                    <Image
                        src={'/icons/cart.png'}
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
        </header>
    )
}