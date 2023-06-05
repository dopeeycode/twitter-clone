import { illustration as IllustrationLogin, logo } from "@/assets/directory"
import Image from "next/image"

export default function page() {
  return (
    <main className="h-full overflow-y-hiddenz w-screen">
      <div className="flex items-center justify-center">
        <section className="flex-1 h-screen bg-twitterBlue max-[1012px]:hidden">
          <div className="flex flex-col justify-center p-20 ">
            <h1 className="text-white font-bold leading-[3rem] text-[2.5rem] max-[1266px]:text-[2rem] 
            max-[1266px]:leading-[1.90rem]">
              Veja o que <br className="max-[1160px]:hidden"/> está acontecendo agora
            </h1>
            <p className="text-white text-[1.25rem] mt-[1.5rem] font-semibold leading-[1.5rem]">
              Inscreva-se no Twitter hoje mesmo
            </p>
            <Image 
              src={IllustrationLogin}
              alt=""
              className="mt-[-4.5rem] w-[600px] max-[1266px]:hidden"
            />
            <span className="text-white mt-[-2rem] text-[.875rem] max-[1266px]:hidden leading-[1.063rem] text-center">
              © 2022 Twitter, Inc.
            </span>
          </div>
        </section>
        <section className="flex flex-1 h-screen max-[1012px]:justify-center ">
          <div className="py-[3.75rem] pl-[6rem] pr-[6.25rem]">
            <Image src={logo} alt="" />
            <div className="mt-[3.5rem]">
              <h1 className="text-[2.5rem] mb-[2rem] font-bold leading-[3.063rem] text-zinc-800
              max-[428px]:text-[2rem]">
                Descubra o que <br /> está em alta
              </h1>
              <strong className="text-[1.25rem]  text-[#757575]">Entre no Twitter</strong>
              <form className="flex flex-col mt-[1.188rem] w-[400px] max-[420px]:w-[300] gap-[1.188rem]">
                <input 
                  type="text" 
                  placeholder="Celular, e-mail ou nome de usuário" 
                  className="bg-bgInput placeholder:text-[.875rem] p-[1.188rem] w-full rounded-md"
                />
                <input 
                  type="password" 
                  placeholder="Digite sua senha" 
                  className="bg-bgInput placeholder:text-[.875rem] p-[1.188rem] w-full rounded-md "
                />
                <a href="#" className="flex justify-end text-[.875rem]">
                    Esqueceu sua senha ?
                  </a>
                <button 
                  type="submit" className="py-[0.375rem] px-[.75rem] bg-twitterBlue text-white h-[3.75rem] 
                  mt-[1.5rem] rounded-md hover:bg-opacity-90 transition-all">
                  Conecte-se agora
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
