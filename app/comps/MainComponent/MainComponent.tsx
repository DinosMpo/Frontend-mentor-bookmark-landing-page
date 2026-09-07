import Image from "next/image";
import "./MainComponent.css";

export default function MainComponent() {
  return (
    <div id="main-component-container">
      <div id="main-component-section1">
        <div id="main-component-section1-wrapper">
          <div id="main-component-title">A Simple Bookmark Manager</div>

          <p id="main-component-description">
            A clean and simple interface to organize your favourite websites. Open a new
            browser tab and see your sites load instantly. Try it for free.
          </p>

          <div id="main-component-buttons">
            <div id="main-component-chrome">Get it on Chrome</div>
            <div id="main-component-firefox">Get it on Firefox</div>
          </div>
        </div>
      </div>

      <div id="main-component-section2">
        <div id="main-component-section2-wrapper">
          <Image
            id="test"
            alt="image"
            src="./illustration-hero.svg"
            sizes="100vw"
            style={{
              width: '100%',
              maxWidth: '657px',
              height: '100%',
              maxHeight: '466px'
            }}
            width="0"
            height="0"
          />
          <div style={{
            // border: '1px solid black',
            position: 'absolute',
            bottom: '0',
            right: '0',
            height: '100%',
            width: '80%'
          }}>
            <div id="background-rectangular"></div>
          </div>
        </div>
      </div>

    </div>
  )
}
