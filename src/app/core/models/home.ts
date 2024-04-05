import { TemplateRef } from "@angular/core"

export interface Home {


}
export interface technologyItem {
    id: number,
    technologyName: string,
    routePath: string
}
export interface techTopics {
    id: number,
    sectionName: string
}
export interface queAndAnsItem {
    id: string,
    refId?: any,
    question: string,
    answer: string,
    codeSnippet: boolean
}