import Image from "next/image";
import "./MobileNavModal.css";

export default function MobileNavModal({
  setShowMobileMenu,
}: {
  setShowMobileMenu: any;
}) {
  return (
    <nav id="mobile-nav-modal">
      <div>
        <div id="mobile-nav-logo-container">
          <Image
            src="./logo-bookmark-light.svg"
            alt="logo"
            width={0}
            height={0}
            style={{ width: "148px", height: "25px" }}
          />

          <div
            id="mobile-close-button"
            onClick={() => setShowMobileMenu((preV: boolean) => !preV)}
          >
            <Image
              alt="close img"
              width={16}
              height={15}
              src="./icon-close.svg"
            />
          </div>
        </div>

        <div id="mobile-nav-categories-wrapper">
          <a
            className="mobile-nav-link"
            href="#features-container"
            onClick={() => setShowMobileMenu((preV: boolean) => !preV)}
          >
            <div className="mobile-nav-category">FEATURES</div>
          </a>
          <a
            className="mobile-nav-link"
            href="#download-extensions-container"
            onClick={() => setShowMobileMenu((preV: boolean) => !preV)}
          >
            <div className="mobile-nav-category">PRICING</div>
          </a>
          <a
            className="mobile-nav-link"
            href="#contact-container"
            onClick={() => setShowMobileMenu((preV: boolean) => !preV)}
          >
            <div className="mobile-nav-category">CONTACT</div>
          </a>

          <div id="mobile-login-button">LOGIN</div>
        </div>
      </div>

      <div id="mobile-nav-socials">
        <div>
          <a target="_blank" href="https://www.facebook.com">
            <Image
              width={24}
              height={24}
              alt="facebook icon"
              src="./icon-facebook.svg"
            />
          </a>
        </div>

        <div>
          <a target="_blank" href="https://www.x.com">
            <Image
              width={24}
              height={24}
              alt="facebook icon"
              src="./icon-twitter.svg"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
