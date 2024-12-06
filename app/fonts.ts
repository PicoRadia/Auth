import localFont from 'next/font/local'

export const universalSans = localFont({
  src: [
    {
      path: './fonts/UniversalSansDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/UniversalSansDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/UniversalSansDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-universal-sans'
}) 