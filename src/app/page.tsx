"use client"
import React from 'react';

const Home: React.FC = () => {
  const iframeSrc = 'https://filmnet.ir/';
  const useragent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36';

  return (
    <iframe
      src={iframeSrc}
      style={{ width: '100%', height: '100vh' }}
      sandbox="allow-same-origin allow-scripts allow-popups"
      title="FilmNet"
      onLoad={(e) => {
        const iframe = e.target as HTMLIFrameElement;
        const doc = iframe.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write('<!DOCTYPE html><html><head><title>FilmNet</title></head><body></body></html>');
          doc.close();
          doc.documentElement.style.overflow = 'hidden';
          doc.documentElement.style.width = '100%';
          doc.documentElement.style.height = '100%';
          doc.body.style.overflow = 'hidden';
          doc.body.style.width = '100%';
          doc.body.style.height = '100%';
          const script = doc.createElement('script');
          script.type = 'text/javascript';
          script.innerHTML = `Object.defineProperty(navigator, 'userAgent', { value: '${useragent}', writable: false });`;
          doc.head.appendChild(script);
          doc.location.replace(iframeSrc);
        }
      }}
    />
  );
};

export default Home;
