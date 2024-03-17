import React, {useState} from 'react';
import {ILocationRow, ILocationAll} from '@components/types';
import {LocationExpandedCard, PropRow} from '@components';
import {useAppDispatch} from '@hooks';
import {getLocation} from '@services';
export const LocationRow: React.FC<ILocationRow> = props => {
  const dispatch = useAppDispatch();
  const {type, location} = props;
  const [fetchedLocationData, setFetchedLocationData] =
    useState<ILocationAll | null>(null);
  const [fetchError, setFetchError] = useState<boolean>(false);
  const handleRowPress = async () => {
    try {
      if (fetchedLocationData) return; // data already fetched
      const locationData = await dispatch(getLocation({url: location.url}));
      if (!locationData) throw 'Error fetching';
      setFetchedLocationData(locationData?.payload);
    } catch (error) {
      console.log(error);
      setFetchError(true);
    }
  };
  return (
    <PropRow
      type={type}
      value={location.name}
      expandable={location.url && !fetchError ? true : false}
      onPress={handleRowPress}
      ExpandedChild={
        <LocationExpandedCard fetchedLocationData={fetchedLocationData} />
      }
    />
  );
};
