export interface Photo {
    id:number;
    portDate:Date;
    url:string;
    description:string;
    allowComments:boolean;
    likes:number;
    comments:number;
    userId:number;
}