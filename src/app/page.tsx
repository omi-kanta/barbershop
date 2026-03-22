import { HeroSlider } from '@/features/hero';
import { StorySection } from '@/features/story';
import { ServicesSection } from '@/features/services';
import { GallerySection } from '@/features/gallery';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <StorySection />
      <ServicesSection />
      <GallerySection />
    </main>
  );
}