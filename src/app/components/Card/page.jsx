import Image from "next/image"

export default function Card(props) {
    return(
        <section className="max-w-[600px] w-full h-[400px] bg-cyan-200 rounded-lg p-3 flex">
            <div className="w-1/2 flex items-center">
                <Image
                    className="w-full"
                    src={props.img}
                    width={200}
                    height={200}
                    alt={props.alt}
                />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center gap-2">
                <div>
                    <h2 className="text-black text-7xl flex relative font-bold">79<p className="text-xl absolute bottom-0 -right-7">,99</p></h2>
                </div>
                <p className="text-black">Bola de Futebol modelo <strong>23232</strong></p>
                <div>
                 <button className="bg-blue-300 p-2 rounded-xl border-none hover:bg-blue-400">Adicionar ao Carrinho</button>
                </div>
            </div>
        </section>
    )
}