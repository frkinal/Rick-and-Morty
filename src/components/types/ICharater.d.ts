export interface ICharacterProps {
  contents: ICharacter;
}
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
