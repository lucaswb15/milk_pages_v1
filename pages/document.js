import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='<link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">'
          rel='stylesheet'
        />
        <link
          href='<link rel="preconnect" href="https://fonts.googleapis.com/%22%3E
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap"' rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}