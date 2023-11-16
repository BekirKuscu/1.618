import Home from "./Home/Home";
import DonationsPage from "./Donations/Donations";
import MoreInfo from "./MoreInfo/MoreInfo";

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/DonationsPage",
    element: <DonationsPage />
  },
  {
    path: "/MoreInfo",
    element: <MoreInfo />
  }
];
