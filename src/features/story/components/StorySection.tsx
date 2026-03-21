import Image from 'next/image';
import { SKILLS, HOBBIES } from '@/constants/data';

export const StorySection = () => {
  return (
    <section id="story" className="bg-white" style={{ marginTop: '10vh' }}>

      {/* Main Story */}
      <div className="container mx-auto max-w-7xl py-16 md:py-32 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5]">
              <Image
                src="/images/story/story-1.jpg"
                alt="Yuki Ichinose"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-900 -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.2em] text-stone-500 mb-6 font-light">
              MY STORY
            </p>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              <span className="font-light">一人ひとりの</span>
              <br />
              <span className="font-serif italic">個性を引き出す</span>
            </h2>
            <div className="flex flex-col gap-6 text-stone-600 font-light leading-relaxed text-sm">
              <p>大切にしているのは、技術だけでなく「対話」です。お客様のライフスタイル、仕事、趣味。そのすべてを理解した上で、最適なスタイルを提案します。</p>
              <p>完全予約制のプライベート空間で、あなただけの特別な時間をお過ごしください。</p>
            </div>
            <div className="mt-10 pt-10 border-t border-stone-200">
              <p className="font-serif italic text-2xl mb-2">Yuki Ichinose</p>
              <p className="text-xs text-stone-500 tracking-widest font-light">PERSONAL BARBER / OWNER</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills - full width */}
      <div className="max-w-5xl mx-auto py-10 px-8">
        <div className="bg-stone-100 p-8 md:p-12">
          <div className="max-w-3xl mx-auto py-6 md:py-12 px-2 md:px-12">
            <h3 className="text-center text-2xl font-light mb-8">
              得意な<span className="font-serif italic ml-2">技術</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="flex justify-between items-center bg-white border border-stone-200 px-6 py-5"
                >
                  <span className="font-light">{skill.name}</span>
                  <span className="text-sm text-stone-500 font-light">経験 {skill.years}年</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="mt-16 mb-16 md:mb-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-light">
            プライベートでは<span className="font-serif italic ml-2">こんなことが好き</span>
          </h3>
          <p className="text-stone-600 font-light">日々の暮らしの中で大切にしていることが、施術にも活きています</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {HOBBIES.map((interest) => (
            <div
              key={interest.name}
              className="text-center p-6 bg-stone-50 hover:bg-stone-100 transition-colors group"
            >
              <span className="text-3xl mb-4 block">{interest.icon}</span>
              <h4 className="text-base font-light mb-2">{interest.name}</h4>
              <p className="text-sm text-stone-600 font-light leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
