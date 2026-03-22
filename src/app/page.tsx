import { HeroSlider } from '@/features/hero';
import { StorySection } from '@/features/story';
import { ServicesSection } from '@/features/services';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <StorySection />
      <ServicesSection />
    </main>
  );
}