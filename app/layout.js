import Header from "../components/header/page";
import { Poppins } from "next/font/google"; // importing from google font
import { Roboto } from "next/font/google"; // importing from google font

const poppins = Poppins({
  // calling font poppin method adding subset array wight
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: ["--font-poppins"], // Add weights
});

// const roboto = Roboto({
//   subsets: ["latin"],
//   variable: ["--font-roboto"],
// });

export const metadata = {
  title: {
    default: "Dev_Alok",
    template: "%s | Dev_Alok",
  },
  description: "Nextjs Portfilio",
  keyword: ["Dev_Portfolio", "Developer_Portfolio", "Nextjs Portfolio"],
  icons: {
   icon: "/Alien.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`black ${poppins.className} `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
