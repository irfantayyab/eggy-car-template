import EarnRewards from "./earn-rewards";
import GameLevels from "./game-levels";
import GamescapeStyle from "./gamescape-style";
import HowToPlay from "./how-to-play";
import Intro from "./intro";
import SafeForChildren from "./safe-for-children";
import Upgrades from "./upgrades";
import WhatIsEggyCar from "./what-is-eggy-car";

export default function HomePage() {
 return (
  <>
   <Intro />
   <WhatIsEggyCar />
   <HowToPlay />
   <EarnRewards />
   <Upgrades />
   <GamescapeStyle />
   <GameLevels />
   <SafeForChildren />
  </>
 );
}
