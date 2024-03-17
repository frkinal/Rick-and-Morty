import {ICharacter, IPage} from '@services/types';
export interface ICharacters extends IPage {
  results: ICharacter[];
}
