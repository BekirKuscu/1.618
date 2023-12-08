import React from 'react';
import Header from '../../Components/Header-Content/Header';
import WasteDetail from '../../Components/WasteDetail-Content/WasteDetail';
// import WasteQuote from '../../Components/WasteQuotes-Conten/WasteQuote';
import TeamSection from '../../Components/Our-Team/TeamSection';

function Home() {
return (
    <div>
      <Header />
      <WasteDetail />
      <TeamSection />
      {/* <WasteQuote /> */}
    </div>
)
  }

export default Home;
