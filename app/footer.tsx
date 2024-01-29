import Image from "next/image";
import logo from "../public/Слой 2.png"
export default function Footer() {
    return (
        <div className="bg-[#436591] mt-24 flex items-center justify-between py-12 px-40">
            <div >
                <Image
                    src={logo}
                    width={160}
                    height={75.73}
                    alt="Picture of the author"
                />
            </div>
            <div className="block	">
                <p className="w-[500px] text-white mb-8">Служба технической поддержки ГТК
                    работает с 10:00 до 22:00 без выходных</p>
                <a href="" className="mx-3 text-white">(812) 332-34-33</a><br />
                <a href="" className="mx-3 text-white">(812) 33-234-33</a>
                <p className="mx-3 text-white mt-12">Лицензии и сертификаты</p>
            </div>
        </div>
    );
}
