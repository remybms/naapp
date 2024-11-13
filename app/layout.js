"use client"

import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  useEffect(() => {
    window.interdeal = {
      "sitekey": "83ba71bf18d84207f7fb0b18fa77c25e",
      "Position": "Left",
      "domains": {
        "js": "https://cdn.equalweb.com/",
        "acc": "https://access.equalweb.com/"
      },
      "Menulang": "FR",
      "btnStyle": {
        "vPosition": [
          "80%",
          "80%"
        ],
        "scale": [
          "0.5",
          "0.5"
        ],
        "color": {
          "main": "#1c4bb6",
          "second": "#ffffff"
        },
        "icon": {
          "outline": false,
          "type": 1,
          "shape": "circle"
        }
      }
    };
    (function (doc, head, body) {
      var coreCall = doc.createElement('script');
      coreCall.src = interdeal.domains.js + 'core/5.0.9/accessibility.js';
      coreCall.defer = true;
      coreCall.integrity = 'sha512-dxjHZQgpVIG70EQus4+1KR3oj2KGyrtwR/nr4lY+tcMjrQ1Yb9V1SCKNVLGhD3CcPMgANKAqOk4ldI8WWNnQTw==';
      coreCall.crossOrigin = 'anonymous';
      coreCall.setAttribute('data-cfasync', true);
      body ? body.appendChild(coreCall) : head.appendChild(coreCall);
    })(document, document.head, document.body);
  })
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
