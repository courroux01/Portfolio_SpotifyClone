import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import getSongs from '@/actions/getSongs';
import PageContent from '@/app/(site)/components/PageContent';
import LikedPicture from '../liked.png';

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  return (
    <div className='  bg-neutral-900 h-full w-full rounded-lg overflow-hidden overflow-y-auto'>
      <Header>
        <div className='mb-2'>
          <h1 className='text-white text-3xl font-semibold'>Welcome back!</h1>
          <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
            <ListItem image={LikedPicture} name='Liked songs' href='liked' />
          </div>
        </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
        <div className=' flex justify-between items-center '>
          <h1 className='text-white text-2xl font-semibold'>Newest songs</h1>
        </div>
        <div>
          <PageContent songs={songs} />
        </div>
      </div>
    </div>
  );
}
