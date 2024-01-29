import Image from "next/image";
import logo from "../public/Слой 2.png"
import image1 from "../public/q.png"
export default function Header() {
    return (
        <div>
            <div className="bg-[#436591] py-5 px-40 flex items-center justify-between		">
                <Image
                    src={logo}
                    width={77.75}
                    height={36.73}
                    alt="Picture of the author"
                />
                <div >
                    <a href="" className="mx-3 text-white	">Тарифы</a>
                    <a href="" className="mx-3 text-white	">О компании</a>
                    <a href="" className="mx-3 text-white	" >Акции</a>
                    <a href="" className="mx-3 text-white	">Оставить заявку</a>
                    <a href="" className="mx-3 text-white	">Контакты</a>
                </div>

                <div className="mx-6">
                    <a href="" className="text-white">(812)  332-34-33 </a>
                    <a href="" className="mx-3 text-white">support@gtk.su</a>
                </div>
            </div>
            <div className="bg-[#FCBD14]  flex items-center justify-between py-12 px-40">
                <div className="">
                    <h1 className="text-4xl	w-[500px] text-white">
                        Пять месяцев интернета
                        на скорости 100 мбит/cек
                    </h1>
                    <h2 className="text-6	w-[400px] mt-6 text-white">Подключитесь к ГТК и работайте быстрее со скоростью 100 мбит/сек.
                        в течение 5 месяцев</h2>
                </div>
                <Image
                    src={image1}
                    width={535}
                    height={372}
                    alt="Picture of the author"
                />
            </div>


        </div>
    );
}
