'use client';

import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Input from './Input';

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    import('query-string').then((qs) =>
      router.push(
        qs.default.stringifyUrl({
          url: '/search',
          query: query,
        })
      )
    );
  }, [debouncedValue, router]);
  return (
    <Input
      placeholder='What do you want to listen to? '
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
