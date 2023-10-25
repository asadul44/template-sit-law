
export interface Specialties {
    data: Specialtie[];
}

export interface Specialtie {
    id:         number;
    attributes: AttributesType;
}

export interface AttributesType {
    name_of_specialty?: string;
    description?:       string;
    createdAt?:         Date;
    img?:ImageType
}


export interface ImageType{
    data : ImageDatum[]
}

export interface ImageDatum{
    id : number;
    attributes: ImageAttributes
}

export interface ImageAttributes{
    url : string
    mime:string
}

