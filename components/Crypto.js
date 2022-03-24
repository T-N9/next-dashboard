import Image from "next/image";
import useSWR from "swr";
import { useSelector } from "react-redux";
import { StatusOnlineIcon, TrendingUpIcon, TrendingDownIcon } from '@heroicons/react/outline'

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Crypto = () => {

    const { name } = useSelector((state) => state.crypto);

    const { data, error } = useSWR(`https://api.coingecko.com/api/v3/coins/${name}`, fetcher)

        if (error) return <div>Failed to load</div>
        if (!data) return <div>Loading...</div>

    let coinName, image, current, high, low;
    if(data !== null){
        coinName = data.name;
        image = data.image.small;
        current = data.market_data.current_price.usd;
        high = data.market_data.high_24h.usd;
        low = data.market_data.low_24h.usd;
    }

    return(
        <section className="max-w-[70%]">
            <div className="flex items-center">
                <Image src={image} width={50} height={50}/>
                <h1 className="text-white text-2xl ml-2 font-bungee drop-shadow-tn">
                    {coinName}
                </h1>
            </div>

            <ul className="pl-6 mt-3 border-secondary border-l-4">
                <li className="flex bg-white text-primary py-2 px-3 rounded-md shadow-md mb-2">
                    <StatusOnlineIcon className="w-6"/>
                    <p className="ml-4 text-lg font-bold">
                        $ {current}
                    </p>
                </li>
                <li className="flex bg-white text-primary py-2 px-3 rounded-md shadow-md mb-2">
                    <TrendingUpIcon className="w-6"/>
                    <p className="ml-4 text-lg font-bold">
                        $ {high}
                    </p>
                </li>
                <li className="flex bg-white text-primary py-2 px-3 rounded-md shadow-md">
                    <TrendingDownIcon className="w-6"/>
                    <p className="ml-4 text-lg font-bold">
                        $ {low}
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default Crypto;