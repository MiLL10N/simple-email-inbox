import { FromDetailModel } from './fromDetail.model';

export class EmailDetailModel {
    iconColor : string = '';
    iconName : string = '';
    from : FromDetailModel = new FromDetailModel();
    subject : string  = '';
    body : string  = '';
    time : Date = new Date();
    checked : boolean = false;
}