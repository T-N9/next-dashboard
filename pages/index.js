import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { setOptionToggle } from '../redux/cryptoSlice';
import Clock from '../components/Clock';
import Option from '../components/Option';
import Crypto from '../components/Crypto';
import Weather from '../components/Weather';
import BackgroundInfo from '../components/BackgroundInfo';
import { PencilAltIcon } from '@heroicons/react/outline';

export default function Home({background}) {

  const dispatch = useDispatch();

  // console.log(background)
  let backgroundImage;
  if(background !== null){
    backgroundImage = background.urls.full ;
  }

  return (
    <div>
      <Head>
        <title>TN Dashboard</title>
        <meta name="description" content="Live Dashboard created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='min-h-screen bg-no-repeat px-4 sm:px-8 py-4 bg-center bg-cover flex flex-col justify-between' style={{backgroundImage : `url(${backgroundImage})`}}>
        <div className='flex justify-between flex-col-reverse  sm:flex-row'>
          <Crypto/>
          <Weather/>
        </div>
        <Clock/>
        <Option/>
        <footer className='flex justify-between items-end'>
          <BackgroundInfo
            description={ background.description }
            author_name = { background.user.name}
            author_link = { background.user.links.html }
            author_pic = { background.user.profile_image.small}
            color = { background.color }
            views= {background.views}
            likes = {background.likes}
          />

          <div className='absolute top-[5%] right-[5%] sm:relative sm:right-0'>
            <button onClick={() => dispatch(setOptionToggle())} className='w-10 h-10 bg-white flex justify-center items-center rounded-full text-primary shadow-md'>
              <PencilAltIcon width={25}/>
            </button>
          </div>
        </footer>
      </main>
    </div>
  )
}

export async function getServerSideProps (context) {

  let background = context.query.background;

  background ? background : background = 'nature';

  // console.log(genre)

  const defaultBg = `https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzM3NDg4Njg&ixlib=rb-1.2.1&q=85`;

  const getBackground = await fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${background}`).then(res => res.json()).then(data => data).catch(err => {
    return defaultBg
  });


  return {
    props : {
      background : getBackground,
    }
  }
}




