import BackgroundVideo from 'next-video/background-video';
import getStarted from '@/videos/hero.mp4';
 
export default function Page() {
  return (
    <BackgroundVideo src={getStarted}>
      <h1>next-video</h1>
      <p>
        A React component for adding video to your Next.js application.
        It extends both the video element and your Next app with features
        for automatic video optimization.
      </p>
    </BackgroundVideo>
  );
}