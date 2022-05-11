import WJDiscover from "@/pages/discover"
import WJMine from "@/pages/mine";
import WJFriend from "@/pages/friend"

const routes = [
  {
    path: "/",
    exact: true,
    component: WJDiscover
  },
  {
    path: "/mine",
    component: WJMine
  },
  {
    path: "/friend",
    component: WJFriend
  }
]

export default routes