import Link from "next/link";
import "../../app/globals.css";

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="logo">dev_alok</div>
        <div>
          <nav>
            <ul>
              <li>
                <Link href="/about">about</Link>
              </li>
              <li>
                <Link href="/clientcomponent">clientcomponent</Link>
              </li>
              <li>
                <Link href="/servercomponent">servercomponent</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
