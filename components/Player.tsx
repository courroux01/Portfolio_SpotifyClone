'use client';

import useGetSongById from '@/hooks/useGetSongById';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import usePlayer from '@/hooks/usePlayer';
import React from 'react';
import PlayerItem from './PlayerItem';

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const songUrl = useLoadSongUrl(song!);
  console.log(song, songUrl);
  if (!song || !songUrl || !player.activeId) return null;

  return (
    <div
      className='
        fixed
        bottom-0
        bg-black
        w-full
        py-2
        h-[80px]
        px-4
      '
    >
      <PlayerItem key={song.id} song={song} songUrl={songUrl} />
    </div>
  );
};

export default Player;
