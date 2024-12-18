import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CopyIcon } from "../Lounge/icons";
import { motion } from "framer-motion";
import Logo1 from "../../assets/socials/social1.png";
import Logo2 from "../../assets/socials/social2.png";
import Logo3 from "../../assets/socials/social3.png";
import Logo4 from "../../assets/socials/social4.png";
import Logo5 from "../../assets/socials/social5.png";
import Logo6 from "../../assets/socials/social6.png";
import Logo7 from "../../assets/socials/social7.png";
import { ApeButton } from "./icons";
import ConnectButton from "../Profile/connect";
import { useWallet } from "@solana/wallet-adapter-react";
import RugcheckLogo from "../../assets/rugcheck.png";
interface TokenInfo {
  ca: string | undefined;
  logoUrl: string;
  name: string;
  token: string;
  description: string;
  jupyterLink?: string;
  solscanLink?: string;
  pumpfunLink?: string;
  dexscanLink?: string;
  twitterLink?: string;
  telegramLink?: string;
  explorerLink?: string;
}

const TokenInfo = () => {
  const { ca } = useParams<string>();
  const [tokenInfo, setTokenInfo] = useState<TokenInfo>();
  const copyText = async () => {
    await navigator.clipboard.writeText("random");
  };

  useEffect(() => {
    setTokenInfo({
      ca,
      logoUrl:
        " https://nftnow.com/wp-content/uploads/2022/10/kiwami-3428.png ",
      name: "FWOG",
      token: "$FWOG",
      description: "Just a lil fwog in a big pond",
    });
  }, []);

  const { publicKey } = useWallet();
  return (
    <div className=" relative w-full md:w-[90%] lg:w-[85%] xl:w-[80%] md:mx-auto mt-[20px] flex flex-col  md:flex-row  md:justify-between md:mt-[40px] lg:mt-[60px] xl:mt-[100px]">
      <div className=" md:w-[55%] ">
        <div
          className=" border-[4px] rounded-[16px] border-[#F27360] w-[90%] sm:w-[60%] md:w-full mx-auto p-[15px]  flex justify-between items-center"
          style={{ zIndex: 30 }}
        >
          <div className=" flex gap-[15px] sm:gap-[20px] md:items-center ">
            <div className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] lg:w-[70px] lg:h-[70px] xl:w-[80px] xl:h-[80px] rounded-full overflow-hidden flex-shrink-0">
              <img
                src={tokenInfo?.logoUrl}
                className="w-full h-full object-cover object-center"
                alt="Profile"
              />
            </div>
            <div className=" ">
              <p className=" uppercase font-sofia-bold text-[#3d3d3d] text-[20px]">
                {tokenInfo?.name}(${tokenInfo?.token})
              </p>
              <p className=" font-sofia-regular text-[#3d3d3d] text-[16px]">
                {tokenInfo?.description}
              </p>
            </div>
          </div>
          <motion.button
            className=" md:hidden"
            onClick={copyText}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <CopyIcon color="#F27360" />
          </motion.button>
          <div className=" hidden md:flex gap-[5px] items-center ">
            <a href={tokenInfo?.jupyterLink}>
              <img src={Logo1} />
            </a>
            <a href={tokenInfo?.solscanLink}>
              <img src={Logo2} />
            </a>
            <a href={tokenInfo?.pumpfunLink}>
              <img src={Logo3} />
            </a>
            <a href={tokenInfo?.dexscanLink}>
              <img src={Logo4} />
            </a>
            <a href={tokenInfo?.twitterLink}>
              <img src={Logo5} />
            </a>
            <a href={tokenInfo?.telegramLink}>
              <img src={Logo6} />
            </a>
            <a href={tokenInfo?.explorerLink}>
              <img src={Logo7} />
            </a>
          </div>
        </div>
        <div className=" sm:w-[60%] lg:w-[50%] md:hidden mx-auto w-[90%] flex justify-between mt-[15px]">
          <div className=" flex gap-[5px] items-center ">
            <a href={tokenInfo?.jupyterLink}>
              <img src={Logo1} />
            </a>
            <a href={tokenInfo?.solscanLink}>
              <img src={Logo2} />
            </a>
            <a href={tokenInfo?.pumpfunLink}>
              <img src={Logo3} />
            </a>
            <a href={tokenInfo?.dexscanLink}>
              <img src={Logo4} />
            </a>
          </div>
          <div className=" flex gap-[5px] items-center ">
            <a href={tokenInfo?.twitterLink}>
              <img src={Logo5} />
            </a>
            <a href={tokenInfo?.telegramLink}>
              <img src={Logo6} />
            </a>
            <a href={tokenInfo?.explorerLink}>
              <img src={Logo7} />
            </a>
          </div>
        </div>
        <div>
          <div
            className="relative w-[90%] md:h-[300px]  mx-auto sm:w-[50vw] md:w-full z-30  mt-[15px]"
            style={{ zIndex: 20 }}
          >
            <div
              className="absolute top-[5px] md:h-[300px] left-[5px] rounded-[4px] border-[2px] border-transparent w-full h-full bg-black "
              style={{ zIndex: -1 }}
            ></div>
            <div className="relative h-[300px] rounded-[4px] border-black border-[2px] bg-white text-black p-[20px]"></div>
          </div>
        </div>
        <div className=" w-full ">
          {!publicKey ? (
            <ConnectButton>Connect & Ape</ConnectButton>
          ) : (
            <ApeButton />
          )}
        </div>
      </div>
      <div
        className=" w-[90%]  sm:w-[70%] md:w-[40%] mx-auto relative  rounded-[4px] border-[1px] sm:border-[2px] border-[#F2A7B0] mt-[20px] md:mt-0 bg-white"
        style={{ position: "relative" }}
      >
        <div
          className=" absolute top-[5px] left-[5px] rounded-[4px] border-[2px] border-transparent w-full h-full"
          style={{
            backgroundColor: "#F2A7B0",
            position: "absolute",
            zIndex: -1,
          }}
        ></div>
        <div className=" p-[10px] sm:p-[15px] lg:p-[20px] xl:p-[25px] ">
          <div className=" flex justify-between items-center">
            <div className=" flex  gap-[20px]">
              <div className="h-[50px] w-[50px] rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="https://wallpapers.com/images/hd/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.jpg"
                  className="w-full h-full object-cover object-center"
                  alt="Profile"
                />
              </div>
              <div className=" flex flex-col  ">
                <p className=" uppercase font-sofia-bold text-[18px] sm:text-[20px]  text-[#3D3D3D]">
                  Fwog <span>($Fwog)</span>
                </p>
                <p className=" font-sofia-regular font-black text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] text-[#3D3D3D]">
                  just a lil fwog in a big pond
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-between mt-[20px]">
            <div className=" flex flex-col ">
              <p className=" font-sofia-regular font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D] ">
                mcap
              </p>
              <p className=" font-sofia-bold font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D]">
                $18.8M
              </p>
            </div>
            <div className=" flex flex-col ">
              <p className=" font-sofia-regular font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D] ">
                holders
              </p>
              <p className=" font-sofia-bold font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D]">
                $18.8M
              </p>
            </div>
            <div className=" flex flex-col ">
              <p className=" font-sofia-regular font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D] ">
                liquidity
              </p>
              <p className=" font-sofia-bold font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D]">
                $18.8M
              </p>
            </div>
            <div className=" flex flex-col ">
              <p className=" font-sofia-regular font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D] ">
                volume
              </p>
              <p className=" font-sofia-bold font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D]">
                $18.8M
              </p>
            </div>
          </div>
          <div className="w-[80%] bg-gradient-to-r from-[#F2A7B0] to-[#ffffff] h-[2px] mt-[15px] mb-[15px]" />
          <div className=" flex justify-between">
            <div className=" flex flex-col ">
              <p className=" font-sofia-regular font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D] ">
                ATH
              </p>
              <p className=" font-sofia-bold font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D]">
                $300.5M
              </p>
            </div>
            <div className=" flex flex-col ">
              <p className=" font-sofia-regular font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D] ">
                Top 10
              </p>
              <p className=" font-sofia-bold font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D]">
                23%
              </p>
            </div>
            <div className=" flex flex-col ">
              <p className=" font-sofia-regular font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D] ">
                Lp Burnt
              </p>
              <p className=" font-sofia-bold font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D]">
                $96
              </p>
            </div>
            <div className=" flex flex-col ">
              <p className=" font-sofia-regular font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D] ">
                mint
              </p>
              <p className=" font-sofia-bold font-black text-[14px] sm:text-[16px] md:text-[18px]  xl:text-[20px] 2xl:text-[22px] text-[#3D3D3D]">
                disabled
              </p>
            </div>
          </div>
          <div className="w-[80%] bg-gradient-to-r from-[#F2A7B0] to-[#ffffff] h-[2px] mt-[15px] mb-[15px]" />
          <div className=" flex justify-between items-center">
            <div className=" flex gap-[5px] items-center">
              <img src={RugcheckLogo} />
              <p className=" font-vt232 uppercase text-[20px] text-[#3D3D3D]">
                RUGCHECK RISK SCORE
              </p>
            </div>
            <p className=" font-vt232 uppercase text-[32px] text-[#4EAB5E]">
              GOOD
            </p>
          </div>
          <div className="w-[80%] bg-gradient-to-r from-[#F2A7B0] to-[#ffffff] h-[2px] mt-[15px] " />
        </div>
      </div>
    </div>
  );
};

export default TokenInfo;
