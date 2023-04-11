import { SWRConfig } from 'swr';
import '../global.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className='bg-gradient-to-br from-banana to-banana-graDark w-[390px] h-[840px]'>
        <AnimatePresence mode='wait'>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </div>
    </SWRConfig>
  );
}
