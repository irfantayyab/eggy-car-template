import { LocaleContent } from "@/types/common";
import { intro } from "./intro";

const he = {
 intro,
} as const satisfies LocaleContent;

export default he;
