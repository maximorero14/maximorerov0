import {Element} from './elements.model';


export interface Article {
    id: number;
    text?: string;
    img?: string;
    description?: string;
    dateCrated?: Date;
    urlMapping?: string;
    elements?: Element[];
}