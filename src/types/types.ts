export interface ICourseVideoPreview {
  link: string;
  duration: number;
  previewImageLink: string;
}

export interface IMeta {
  slug: string;
  skills: string[];
  courseVideoPreview: ICourseVideoPreview;
}

export interface ICourseItem {
  id: string;
  title: string;
  tags: string[];
  launchDate: Date;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: IMeta;
}

export type CourseItemPreview = Pick<
  ICourseItem,
  'id' | 'title' | 'previewImageLink' | 'lessonsCount' | 'rating'
> & { meta: Pick<IMeta, 'skills'> };
