import Image from "next/image";
import image1 from "../public/family.png"
export default function Servis() {
    return (
        <div className="rounded-2xl	 flex items-center justify-between pl-40 shadow-inner border-2 my-24 mx-16 ">
            <div>
                <h1 className="text-4xl	w-[300px]">ТВ-сервис
                    «СмотрЁшка» </h1>
                <h2 className="text-6	w-[400px] mt-6 ">Вы найдете на «СмотрЁшке» качественный контент на любой вкус и с любого устройства</h2>
            </div>
            <div>
            <Image
                    src={image1}
                    width={500}
                    height={100}
                    alt="Picture of the author"
                />
            </div>
        </div>
    );
}
