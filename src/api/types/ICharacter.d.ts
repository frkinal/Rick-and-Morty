import {IGender, ILocation, IStatus} from '@components/types';
export interface ICharacter {
  id: number;
  name: string;
  status: IStatus;
  species: string;
  type: string;
  gender: IGender;
  origin: ILocation;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
