import { render, screen } from '@testing-library/react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Mock, MockedFunction, vi } from 'vitest';

import { fakeCourse } from '../../tests/__mocks__/course-data';

import { SingleCourse } from './SingleCourse.module';

vi.mock('react-router-dom', () => ({
  useLoaderData: vi.fn(),
  useNavigation: vi.fn(),
}));

vi.mock(
  '../../shared/components/video-player/VideoPlayer.component.tsx',
  () => ({
    VideoPlayer: () => <div data-testid="video-test">Mock Video Player</div>,
  })
);

vi.mock(
  '../single-course/components/lessons-list/LessonsList.component.tsx',
  () => ({
    LessonsList: () => <div data-testid="lesson-list">Mock Lesson List</div>,
  })
);

vi.mock('../../shared/UI/spinner/Spinner.component.tsx', () => ({
  Spinner: () => <div data-testid="spinner-test">Mock Spinner</div>,
}));

global.scrollTo = vi.fn() as Mock;

describe('Single course page', () => {
  const useLoaderDataMock = useLoaderData as MockedFunction<
    typeof useLoaderData
  >;
  const useNavigationMock = useNavigation as MockedFunction<
    typeof useNavigation
  >;

  beforeEach(() => {
    (useLoaderDataMock as Mock).mockReturnValue(fakeCourse);
    (useNavigationMock as Mock).mockResolvedValue({ state: 'idle' });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders a spinner when the page is loading', () => {
    (useNavigationMock as Mock).mockReturnValue({ state: 'loading' });
    const { getByTestId } = render(<SingleCourse />);
    const spinner = getByTestId('spinner-test');

    expect(spinner).toBeInTheDocument();
  });

  it('renders the course data when it is loaded', () => {
    render(<SingleCourse />);

    const courseTitle = screen.getByText(fakeCourse.title);
    const courseSlug = screen.getByText(`Slug: ${fakeCourse.meta.slug}`);
    const courseDescription = screen.getByText(fakeCourse.description);
    const progressField = screen.getByText(
      `Progress 0 / ${fakeCourse.lessons.length}`
    );
    const courseDuration = screen.getByText(`5min total`);

    expect(courseTitle).toBeInTheDocument();
    expect(courseSlug).toBeInTheDocument();
    expect(courseDescription).toBeInTheDocument();
    expect(progressField).toBeInTheDocument();
    expect(courseDuration).toBeInTheDocument();
  });
});
