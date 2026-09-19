import Image from "next/image";
import "./TopNav.css";

export default function TopNav({
  showMobileMenu,
  setShowMobileMenu,
}: {
  setShowMobileMenu: any;
  showMobileMenu: boolean;
}) {
  return (
    <nav id="nav-container">
      {showMobileMenu ? (
        ""
      ) : (
        <Image
          src="./logo-bookmark.svg"
          alt="logo"
          width={0}
          height={0}
          // sizes="100vw"
          style={{ width: "148px", height: "25px" }} // optional
        />
      )}
      <div id="nav-wrapper">
        <a className="nav-link" href="#features-container">
          <div className="nav-category">FEATURES</div>
        </a>
        <a className="nav-link" href="#download-extensions-container">
          <div className="nav-category">PRICING</div>
        </a>
        <a className="nav-link" href="#contact-container">
          <div className="nav-category">CONTACT</div>
        </a>

        {/* <div className="nav-category">FEATURES</div>
        <div className="nav-category">PRICING</div>
        <div className="nav-category">CONTACT</div> */}
        <div id="login-button">LOGIN</div>
      </div>

      <div id="mobile-nav-wrapper">
        <div onClick={() => setShowMobileMenu((preV: boolean) => !preV)}>
          {showMobileMenu ? (
            ""
          ) : (
            <Image
              alt="dropdown menu"
              src="./icon-hamburger.svg"
              width={18}
              height={15}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
