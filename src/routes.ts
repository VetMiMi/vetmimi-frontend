import { createBrowserRouter } from "react-router";
import Root from "@/components/Root";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import IndividualArtTherapy from "@/pages/services/IndividualArtTherapy";
import GroupArtWellbeing from "@/pages/services/GroupArtWellbeing";
import WorkshopsPrograms from "@/pages/services/WorkshopsPrograms";
import ArtOfWellness from "@/pages/ArtOfWellness";
import Portfolio from "@/pages/Portfolio";
import PortfolioDetail from "@/pages/PortfolioDetail";
import Stories from "@/pages/Stories";
import StoryDetail from "@/pages/StoryDetail";
import Contact from "@/pages/Contact";
import BookAppointment from "@/pages/BookAppointment";
import Privacy from "@/pages/legal/Privacy";
import BookingPolicy from "@/pages/legal/BookingPolicy";
import Disclaimer from "@/pages/legal/Disclaimer";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/individual-art-therapy", Component: IndividualArtTherapy },
      { path: "services/group-art-wellbeing", Component: GroupArtWellbeing },
      { path: "services/workshops-programs", Component: WorkshopsPrograms },
      { path: "art-of-wellness", Component: ArtOfWellness },
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/:slug", Component: PortfolioDetail },
      { path: "stories", Component: Stories },
      { path: "stories/:slug", Component: StoryDetail },
      { path: "contact", Component: Contact },
      { path: "book", Component: BookAppointment },
      { path: "privacy", Component: Privacy },
      { path: "booking-policy", Component: BookingPolicy },
      { path: "disclaimer", Component: Disclaimer },
      { path: "*", Component: NotFound },
    ],
  },
]);
