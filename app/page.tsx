"use client";

import { useState, useEffect } from "react";
import TopNav from "./comps/TopNav/TopNav";
import MainComponent from "./comps/MainComponent/MainComponent";
import FeaturesContainer from "./comps/FeaturesContainer/FeaturesContainer";
import DownloadExtension from "./comps/DownloadExtension/DownloadExtension";
import QuestionsContainer from "./comps/QuestionsContainer/QuestionsContainer";
import MobileNavModal from "./comps/MobileNavModal/MobileNavModal";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMobileMenu]);

  return (
    <main id="main-container" className={showMobileMenu ? "no-scroll" : ""}>
      {showMobileMenu ? (
        <MobileNavModal setShowMobileMenu={setShowMobileMenu} />
      ) : (
        ""
      )}
      <TopNav
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <MainComponent />
      <FeaturesContainer />
      <DownloadExtension />
      <QuestionsContainer />
    </main>
  );
}
