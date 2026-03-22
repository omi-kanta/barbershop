import { SERVICES } from '@/constants/data';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-8 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-stone-400 mb-4">SERVICES</p>
          <h2 className="text-3xl md:text-5xl font-light mb-4">
            サービス <span className="font-serif italic">メニュー</span>
          </h2>
          <p className="text-stone-500 font-light text-sm">
            すべてのメニューに丁寧なカウンセリングが含まれています
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-16">
          {SERVICES.map((category) => (
            <div key={category.category}>
              {/* Category Label */}
              <p className="text-xs tracking-[0.3em] text-stone-400 mb-6">
                {category.category}
              </p>

              {/* Items */}
              <div className="flex flex-col">
                {category.items.map((item, idx) => (
                  <div
                    key={item.name}
                    className={`flex justify-between items-start py-8 ${
                      idx !== category.items.length - 1 ? 'border-b border-stone-100' : ''
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-light">{item.name}</h3>
                        {item.isPopular && (
                          <span className="text-xs tracking-widest text-stone-400 border border-stone-300 px-2 py-0.5">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-stone-400 font-light">{item.description}</p>
                    </div>
                    <div className="text-right ml-8">
                      <p className="text-xl font-light">{item.price}</p>
                      <p className="text-xs text-stone-400 font-light mt-1">{item.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-16 p-8 bg-stone-50 border border-stone-100">
          <p className="text-xs text-stone-400 font-light text-center leading-relaxed">
            ※ すべて完全予約制です。初めての方は、カウンセリングの お時間を多めに頂いております。<br />
            ※ 価格は税込表示です。
          </p>
        </div>

      </div>
    </section>
  );
};