import React from 'react';
import Header from '../../Components/Header-Content/Header';
import WasteDetail from '../../Components/WasteDetail-Content/WasteDetail';
import TeamSection from '../../Components/Our-Team/TeamSection';
import Welcome from '../../Components/Welcome-Content/Welcome';
function Home() {
return (
    <div>
       <Welcome />
      <Header />
      <WasteDetail />
      <TeamSection />
    </div>
)
  }

export default Home;
