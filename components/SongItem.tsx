import useLoadImage from '@/hooks/useLoadImage';
import { Song } from '@/types';
import Image from 'next/image';
import React from 'react';
import PlayButton from './PlayButton';

interface SongItemProps {
  onClick: Function;
  song: Song;
}
const SongItem: React.FC<SongItemProps> = ({ onClick, song }) => {
  const imagePath = useLoadImage(song);
  return (
    <div
      onClick={onClick(song.id)}
      className='relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400-10 transition p-3'
    >
      <div className='relative aspect-square w-full h-full rounded-md overflow-hidden'>
        <Image
          className='object-cover'
          src={imagePath || '../public/images/like.png'}
          fill
          alt='song image'
        />
      </div>

      <div className='flex flex-col items-start gap-y-1 w-full pt-4'>
        <p className='truncate font-semibold w-full'>{song.title}</p>
        <p className='text-neutral-400 text-sm pb-4 w-full truncate'>
          By {song.author}
        </p>
        <div className='absolute bottom-24 right-5'>
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default SongItem;
