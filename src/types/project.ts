type PerspectiveImagesType = {
    id:number;
    perspectiveImg:string;
}

export type ProjectDetailsDataType = {
    id:number;
    img:string;
    title:string;
    description:string;
    link:string
    perspectiveImages:PerspectiveImagesType
}