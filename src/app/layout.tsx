import "./globals.css";


export const metadata = {
  title: 'InstaLanding AI',
  description: 'AI-Powered Business Empire Builder',
  icons: {
    icon: '/favicon.png',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
