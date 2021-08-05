// This file sets static data that shouldn't change over the sites lifetime

// interfaces
import { IHelmet } from '../app/interfaces/helmet.interface';

export const helmetTopLevelData: IHelmet = {    
  title: 'Alex Wilson | Bumbling fool', // <head> title
  lang: 'en', 
  description: 'A web developers portfolio site', // <head> description
}
