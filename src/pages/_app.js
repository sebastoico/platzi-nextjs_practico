import '@styles/globals.css';
import Header from '@components/Header.jsx';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Z9QM4DKLT4"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Z9QM4DKLT4');
        `}
      </Script>
      <Header />
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}
