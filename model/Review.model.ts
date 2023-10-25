export interface Reviews {
    data: Review[];
}

export interface Review {
    id:         number;
    attributes: AttributesType;
}

export interface AttributesType {
    review_text?: string;
    rating?:      number;
    users_permissions_users?:UserType
    
    
}
export interface UserType {
   data: UserType[]
       
}
export interface UserType {
   attributes: UserAttributes
   id: number
       
}
export interface UserAttributes {
  userType : string 
  username:string 
  email:string
       
}