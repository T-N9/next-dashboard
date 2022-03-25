import Image from "next/image";
import { EyeIcon, HeartIcon } from "@heroicons/react/outline";

const BackgroundInfo = (props) => {

    const { description, author_name, author_link, author_pic, color, likes, views } = props;

    return(
        <section className="bg-white relative border-secondary border-l-4 px-4 py-2 max-w-xs rounded-md shadow">

            {
                color &&
                <div className="absolute top-[-5px] right-[-5px] rounded-full w-5 h-5" style={{backgroundColor : `${color}`}}>

                </div>
            }
            <p className="max-h-28 overflow-hidden">
                {description}
            </p>

            <div className="flex items-center mt-2">
                <p className="mr-4">
                    By &nbsp; 
                    <a href={author_link}>
                        <span className="font-bold">
                         {author_name}
                        </span>
                    </a>
                </p>

                <Image className="rounded-full" alt={author_name} src={author_pic} width={35} height={35}/>
            </div>

            <div className="text-secondary flex mt-3">
                <span className="flex mr-4">
                    <EyeIcon width={20}/>

                    <p className="ml-2 font-bold">
                        { views}
                    </p>
                </span>

                <span className="flex">
                    <HeartIcon width={20}/>

                    <p className="ml-2 font-bold">
                        { likes}
                    </p>
                </span>
            </div>
        </section>
    )
}

export default BackgroundInfo;