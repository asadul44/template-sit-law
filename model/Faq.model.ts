export interface Faqs {
    data: Faq[];
}

export interface Faq {
    id:         number;
    attributes: AttributesType;
}

export interface AttributesType {
    question?: string;
    answer?:       string;
    
    
}