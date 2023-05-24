import {
  Header,
  Footer,
  HeroSection,
  // HowItWorksSection,
  // InfoSection,
  // RiskToEarnSection,
  // LeaderBoard,
} from "../../components";

function App() {
  return (
    <div className="App flex flex-col h-screen bg-[#111617]">
      <Header />
      <HeroSection />
      {/* <div className="mt-20 bg-landing-background relative h-full flex flex-col bg-no-repeat bg-cover pb-10">
        <div className="w-full h-[200px] absolute top-0 bg-gradient-to-b from-[#111617] to-transparent"></div>
        <div className="flex flex-col gap-10 z-50">
          <div className="mx-12">
            <InfoSection />
            <RiskToEarnSection />
          </div>
          <div className="flex gap-10 px-12">
            <HowItWorksSection />
            <LeaderBoard />
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
