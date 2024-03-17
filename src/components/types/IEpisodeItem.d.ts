export interface IEpisodeItem {
  contents: IEpisodeItemContent;
}
export interface IEpisodeItemContent {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: Date | null;
}
