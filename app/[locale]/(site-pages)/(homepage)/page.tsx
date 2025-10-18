import EarnRewards from "./earn-rewards";
import HowToPlay from "./how-to-play";
import Intro from "./intro";
import WhatIsEggyCar from "./what-is-eggy-car";

export default function HomePage() {
 return (
  <>
   <Intro />
   <WhatIsEggyCar />
   <HowToPlay />
   <EarnRewards />
  </>
 );
}
