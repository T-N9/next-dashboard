import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setOptionToggle } from "../redux/cryptoSlice";
import { setCryptoName } from "../redux/cryptoSlice";
import { XCircleIcon } from "@heroicons/react/outline";

function Option() {

  const router = useRouter();
  const dispatch = useDispatch();
  const { toggle } = useSelector((state) => state.crypto)
  const bgOptions = ['cars', 'flowers', 'cats', 'space', 'sky'];
  const cryptoOptions = ['bitcoin', 'ethereum', 'stellar', 'binancecoin', 'cardano', 'dogecoin', 'litecoin', 'chainlink'];

  const setCoin = (name) => {
    dispatch(setCryptoName(name));
  }

  const setRouter = (route) => {
    router.push(`/?background=${route}`);
    dispatch(setOptionToggle());
  }

  const setCrypto = (name) => {
    setCoin(name);
    dispatch(setOptionToggle());
  }

  return (
    <section className={toggle ? `opacity-100 visible transition-all absolute flex justify-center items-center top-0 right-0 w-full h-full bg-slate-700 bg-opacity-70 backdrop-blur-sm backdrop-grayscale z-50` : `absolute flex justify-center items-center top-0 right-0 w-full h-full invisible opacity-0 transition-all`}>

      <button onClick={() => dispatch(setOptionToggle())} className="text-secondary w-7 absolute top-[20%] right-[10%]">
        <XCircleIcon/>
      </button>
      <div className="flex flex-col max-w-[80%]">
        <div>
          <h1 className="text-white text-lg font-bold mb-2">
            Change Background
          </h1>
          <div className="flex flex-wrap">
            {
              bgOptions.map(item => {
                return (
                  <div key={item} className="cursor-pointer bg-white px-3 py-1 rounded-lg shadow-md mr-2 mb-2" onClick={() => setRouter(item)}>
                    <p className="capitalize font-bungee text-primary">{item}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      
          <div className="my-6 w-full border-white border-2">
      
          </div>
      
        <div>
          <h1 className="text-white text-lg font-bold mb-2">
            Change Crypto
          </h1>
          <div className="flex flex-wrap">
            {
              cryptoOptions.map(item => {
                return (
                  <div key={item} className="cursor-pointer bg-white px-3 py-1 rounded-lg shadow-md mr-2 mb-2" onClick={() => setCrypto(item)}>
                    <p className="capitalize font-bungee text-secondary">
                      {item}
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Option