"use client"

import { useEffect, useRef } from 'react'
import styles from './page.module.css'

const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36";

export default function Home() {
  const iframeRef = useRef();

  useEffect(() => {
    const userAgentProp = {
      get: function() {
        return USER_AGENT;
      }
    };

    iframeRef.current.navigator = Object.create(navigator, {
      userAgent: userAgentProp
    });
  })

  return (
      <iframe ref={iframeRef} className={styles.iframe} src="https://filmnet.ir/" />
  )
}
