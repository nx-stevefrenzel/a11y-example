import { AppProps } from 'next/app';
import '@styles/reset.scss';
import '@styles/globals.scss';
import '@styles/fonts.scss';
import '@styles/nav.scss';
import '@styles/homepage.scss';
import '@styles/footer.scss';
import '@styles/bad-example.scss';
import '@styles/good-example.scss';
import Navigation from '@components/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div id="app-wrapper">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </>
  );
}
