export interface ILocation {
  name: string;
  url: string;
}
export interface ILocationAll extends ILocation {
  type: string;
  dimension: string;
  residents: string[];
}
export interface ILocationRow {
  type: string;
  location: ILocation;
}
