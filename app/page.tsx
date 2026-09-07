import TopNav from "./comps/TopNav/TopNav";
import MainComponent from "./comps/MainComponent/MainComponent";
// import Features from "./comps/FeaturesContainer/FeaturesContainer";
import FeaturesContainer from "./comps/FeaturesContainer/FeaturesContainer";
import DownloadExtension from "./comps/DownloadExtension/DownloadExtension";
import QuestionsContainer from "./comps/QuestionsContainer/QuestionsContainer";

export default function Home() {
  return (
    <main id="main-container">
      <TopNav />
      <MainComponent />
      <FeaturesContainer />
      <DownloadExtension />
      <QuestionsContainer />
    </main>
  );
}
