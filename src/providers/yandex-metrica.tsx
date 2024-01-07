'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { PropsWithChildren, useCallback, useEffect } from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';

export const enableYM =
  process.env.NODE_ENV === 'production' &&
  process.env.NEXT_PUBLIC_YANDEX_METRICA_ID;

export const YandexMetrica = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const hit = useCallback((url: string) => {
    if (enableYM) {
      ym('hit', url);
    } else {
      console.log(`%c[YandexMetrika](HIT)`, `color: orange`, url);
    }
  }, []);

  useEffect(() => {
    const url = pathname + searchParams;
    hit(url);
  }, [pathname, searchParams, hit]);
  return (
    <>
      {enableYM && (
        <YMInitializer
          accounts={[Number(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID)]}
          options={{ defer: true }}
          version='2'
        />
      )}
      {children}
    </>
  );
};
