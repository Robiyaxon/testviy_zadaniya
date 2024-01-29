import Image from "next/image";
import girl from "../public/girl.png"
import boy from "../public/boy.png"
export default function Card() {
    return (
        <div className="flex items-center justify-center ">
            <div className="w-[460px] shadow-md rounded-2xl mx-4 bg-[#FCBD14] p-8 flex">
                <div>
                    <h1 className="text-2xl text-white	">500 рублей на счет
                        каждому абоненту</h1>
                    <p className="text-[14px] text-white mt-4	">Хотите подарок? Легко!
                        Вы рекомендуете нас Вашим друзьям
                        и знакомым — мы пополняем Ваш счет
                        в ГТК на 500 рулей!</p>
                </div>

                <Image
                    src={girl}
                    width={535}
                    height={372}
                    alt="Picture of the author"
                />


            </div>
            <div className="w-[460px] shadow-md rounded-2xl bg-[#2FA56C] p-8  flex">
                <div>
                    <h1 className="text-2xl text-white	">500 рублей на счет
                        каждому абоненту</h1>
                    <p className="text-[14px] text-white mt-4	">Хотите подарок? Легко!
                        Вы рекомендуете нас Вашим друзьям
                        и знакомым — мы пополняем Ваш счет
                        в ГТК на 500 рулей!</p>
                </div>

                <Image
                    src={girl}
                    width={535}
                    height={372}
                    alt="Picture of the author"
                />


            </div>
        </div>
    );
}
