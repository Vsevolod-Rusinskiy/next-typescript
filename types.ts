export type companyType = {
    name: string,
    bs: string,
   
}

export type contactType = {
    id: string,
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    company: companyType
}