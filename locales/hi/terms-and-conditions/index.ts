import { LocaleContent } from "@/types/common";
import { intro } from "./intro";

const hi = {
 intro,
} as const satisfies LocaleContent;

export default hi;
