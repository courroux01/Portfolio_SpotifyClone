'use client';

import Button from '@/components/Button';
import useSubscribeModal from '@/hooks/useSubscribeModal';
import { useUser } from '@/hooks/useUser';
import { postData } from '@/libs/helpers';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const AccountContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, user, subscription } = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading && !user) router.replace('/');
  }, [isLoading, user, router]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link',
      });
      router.replace(url);
    } catch (err: any) {
      toast.error((err as Error).message);
    }
    setLoading(false);
  };
  return (
    <div className='mb-7 px-6'>
      {subscription ? (
        <div className='flex flex-col gap-y-4'>
          <p>
            You are currently on the
            <b> {subscription?.prices?.products?.name} plan.</b>
          </p>
          <Button
            className='w-[300px] mt-2'
            disabled={loading || isLoading}
            onClick={redirectToCustomerPortal}
          >
            Open Customer Portal
          </Button>
        </div>
      ) : (
        <div className='flex flex-col gap-y-4'>
          <p>No active plan.</p>
          <Button onClick={subscribeModal.onOpen} className='w-[300px] mt-2'>
            Subscribe
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountContent;
