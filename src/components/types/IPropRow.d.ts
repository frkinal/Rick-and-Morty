export interface IPropRow {
  type: string;
  value: string;
  expandable?: boolean;
  onPress?: Function;
  ExpandedChild?: React.ReactNode;
}
