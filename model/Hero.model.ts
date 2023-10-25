export interface Heroes {
  data: Hero[];
}

export interface Hero {
  id: number;
  attributes: AttributesType;
}

export interface AttributesType {
  banner_title?: string;
  banner_description?: string;
  type?: string;
  hero_img:ImageType
}

export interface ImageType{
    data : Images[]
}

export interface Images{
    attributes:ImageAttributes;
    id:number
}

export interface ImageAttributes{
    name: string,
    caption: null,
    width: 468,
    height: 607,
    url:string
}
