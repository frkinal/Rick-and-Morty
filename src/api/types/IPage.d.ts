export interface IPageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
export interface IPage {
  info: IPageInfo;
  results: any[];
}
