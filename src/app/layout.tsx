import "@/scss/index.scss";
import { Raleway, Fira_Code } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] });
const fira_code = Fira_Code({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Fikri's Portfolio",
  description: "Welcome to Fikri's Portfolio Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
