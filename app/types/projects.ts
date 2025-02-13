import type { RichTextContent } from "@graphcms/rich-text-types";

export type knownTech = {
    iconSvg: string
    name: string
    startDate: string
}

export type ProjectSection = {
    title: string
    image: {
        url: string
    }
}

export type Project = {
    slug: string
    thumbnail: {
        url: string
    }
    title: string
    shotDescriton: string
    technology: knownTech[]
    pageThumbnail: {
        url: string
    }
    section: ProjectSection[]
    descripion: {
        raw:  RichTextContent
    }
    liveProjectUrl?: string
    gitUrl?: string
}