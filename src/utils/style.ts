import {IGender, IStatus} from '@components/types';

export const selectStatusColor = (status: IStatus): string => {
  switch (status) {
    case 'Alive':
      return 'green';
    case 'Dead':
      return 'red';
    default:
      return 'grays';
  }
};

export const selectGenderSymbol = (gender: IGender) => {
  switch (gender) {
    case 'Male':
      return '♂';
    case 'Female':
      return '♀';
    case 'Genderless':
      return '⚤';
    default:
      return '?';
  }
};
