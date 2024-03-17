import {PropsWithChildren} from 'react';
export interface ITheme extends PropsWithChildren {
  style?: ViewStyle;
  showArrow?: boolean;
  title: string;
  favoriteScreen?: boolean;
}
