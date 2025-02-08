import { knownTech } from "./projects";
import type { RichTextContent } from "@graphcms/rich-text-types";

export type Social = {
    url: string
    iconSvg: string
}

export type HomePageInfo = {
        introduction: {
            raw: RichTextContent
        }
        profilePickter: {
            url: string
        }
        social: Social[]

        technology:knownTech[]

        knownTechs:knownTech[]

}

export type HomePageData = {
    page: HomePageInfo
}