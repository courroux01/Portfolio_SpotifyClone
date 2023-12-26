import { Song } from '@/types';
import { useSessionContext } from '@supabase/auth-helpers-react';

const useLoadImage = (song: Song) => {
  const { supabaseClient } = useSessionContext();

  if (!song) return null;

  const { data: imageData } = supabaseClient.storage
    .from('Images')
    .getPublicUrl(song.image_path);

  return imageData.publicUrl;
};

export default useLoadImage;
