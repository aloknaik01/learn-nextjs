import AboutHeader from "@/components/about_header/page";

const AboutLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AboutHeader />
        {children}
      </body>
    </html>
  );
};

export default AboutLayout;
