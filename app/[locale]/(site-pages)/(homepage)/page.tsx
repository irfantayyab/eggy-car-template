import Conclusion from "./conclusion";
import EarnRewards from "./earn-rewards";
import FAQs from "./faqs";
import GameControls from "./game-controls";
import GameLevels from "./game-levels";
import GamescapeStyle from "./gamescape-style";
import HowToPlay from "./how-to-play";
import Instructions from "./instructions";
import Intro from "./intro";
import Popularity from "./popularity";
import RelatedGames from "./related-games";
import SafeForChildren from "./safe-for-children";
import TipsAndTricks from "./tips-and-tricks";
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
   <GameControls />
   <Instructions />
   <GamescapeStyle />
   <GameLevels />
   <TipsAndTricks />
   <SafeForChildren />
   <Popularity />
   <RelatedGames />
   <FAQs />
   <Conclusion />
  </>
 );
}
