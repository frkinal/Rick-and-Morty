import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {ICharacter, ICharacters, IEpisode} from '@services/types';
import {apiClient} from './config';
import {ILocationAll} from '@components/types';
export const getEpisodes = createAsyncThunk('episode/getEpisodes', async () => {
  try {
    const response: AxiosResponse = await apiClient.get('episode');
    const data: IEpisode = response.data;
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
});
export const getEpisode = createAsyncThunk(
  'episode/getEpisode',
  async ({id}: {id: number}) => {
    try {
      const response: AxiosResponse = await apiClient.get(`episode/${id}`);
      const data: IEpisode = response.data;
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
);
export const getCharacters = createAsyncThunk(
  'character/getCharacters',
  async ({url}: {url: string}) => {
    try {
      const response: AxiosResponse = await apiClient.get(url);
      const data: ICharacters = response.data;
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
);
export const getCharacter = createAsyncThunk(
  'character/getCharacter',
  async ({url}: {url: string}) => {
    try {
      const response: AxiosResponse = await apiClient.get(url);
      const data: ICharacter = response.data;
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
);
export const getLocation = createAsyncThunk(
  'location/getLocation',
  async ({url}: {url: string}) => {
    try {
      const response: AxiosResponse = await apiClient.get(url);
      const data: ILocationAll = response.data;
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
);
