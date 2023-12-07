import React from 'react';
import Header from '../../Components/Header-Content/Header';
import WasteDetail from '../../Components/WasteDetail-Content/WasteDetail';
import TeamSection from '../../Components/Our-Team/TeamSection';
import Welcome from '../../Components/Welcome-Content/Welcome';
import OurMission from '../../Components/OurMission-Content/OurMission';
function Home() {
return (
    <div>
      <Welcome />
      <Header />
      <OurMission />
      <WasteDetail />
      <TeamSection />
    </div>
)
  }

export default Home;
