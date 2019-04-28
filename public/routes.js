// core components/views for Admin layout
import NewCampaign from "views/NewCampaign.jsx";
import DeckManager from "views/DeckManager.jsx";
import Home from "views/Home.jsx";
import NotificationsPage from "views/Notifications.jsx";
import PlayerProfile from "views/PlayerProfile.jsx";
import RulesReference from "views/RulesReference.jsx";
import CurrentCampaign from "views/CurrentCampaign.jsx";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "home",
    component: Home,
    layout: "/ahda"
  },
  {
    path: "/player-profile",
    name: "Player Profile",
    icon: "person",
    component: PlayerProfile,
    layout: "/ahda"
  },
  {
    path: "/rules-reference",
    name: "Rules Reference",
    icon: "question_answer",
    component: RulesReference,
    layout: "/ahda"
  },
  {
    path: "/new-campaign",
    name: "New Campaign",
    icon: "library_books",
    component: NewCampaign,
    layout: "/ahda"
  },
  {
    path: "/current-campaign",
    name: "Current Campaign",
    icon: "timeline",
    component: CurrentCampaign,
    layout: "/ahda"
  },
  {
    path: "/deck-manager",
    name: "Deck Manager",
    icon: "reorder",
    component: DeckManager,
    layout: "/ahda"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "notifications",
    component: NotificationsPage,
    layout: "/ahda"
  }
];

export default dashboardRoutes;
