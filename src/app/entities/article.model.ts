import {Element} from './elements.model';


export interface Article {
    id: string;
    category: string;
    title: string;
    img: string;
    description: string;
    dateCrated: Date;
    elements?: Element[];
}