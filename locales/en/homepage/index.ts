import { LocaleContent } from "@/types/common";
import { intro } from "./intro";
import { whatIsEggyCar } from "./what-is-eggy-car";
import { howToPlay } from "./how-to-play";
import { earnRewards } from "./earn-rewards";
import { upgrades } from "./upgrades";
import { gameControls } from "./game-controls";
import { instructions } from "./instructions";
import { gamescapeStyle } from "./gamescape-style";
import { gameLevels } from "./game-levels";
import { tipsAndTricks } from "./tips-and-tricks";
import { safeForChildren } from "./safe-for-children";
import { popularity } from "./popularity";
import { relatedGames } from "./related-games";
import { faqs } from "./faqs";
import { conclusion } from "./conclusion";

const en = {
 intro,
 whatIsEggyCar,
 howToPlay,
 earnRewards,
 upgrades,
 gameControls,
 instructions,
 gamescapeStyle,
 gameLevels,
 tipsAndTricks,
 safeForChildren,
 popularity,
 relatedGames,
 faqs,
 conclusion,
} as const satisfies LocaleContent;

export default en;
