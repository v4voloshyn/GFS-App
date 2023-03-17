import { FC } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { ICourseItem } from '../types/types';

export const Course: FC = () => {
  const courseData = useLoaderData() as ICourseItem;
  const navigation = useNavigation();
  console.log('STATE', navigation.state);

  return <div>Course Page {courseData.id}</div>;
};
