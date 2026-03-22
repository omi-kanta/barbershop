import { ServiceCategory, GallerySlide, Skill, Hobby } from '@/types';

// サービスメニュー
export const SERVICES: ServiceCategory[] = [
  {
    category: 'HAIRCUT',
    items: [
      {
        name: 'カット',
        description: 'カウンセリング、カット、シャンプー、スタイリング',
        price: '¥6,000',
        duration: '60min',
      },
      {
        name: 'カット & ヘッドスパ',
        description: 'カット + リラックスできる本格ヘッドスパ',
        price: '¥8,500',
        duration: '80min',
      },
    ],
  },
  {
    category: 'SHAVING',
    items: [
      {
        name: 'シェービング',
        description: '蒸しタオル、シェービング、アフターケア',
        price: '¥5,000',
        duration: '45min',
      },
      {
        name: 'プレミアムシェービング',
        description: 'フェイシャルマッサージ付きの贅沢なコース',
        price: '¥7,000',
        duration: '60min',
      },
    ],
  },
  {
    category: 'SET MENU',
    items: [
      {
        name: 'カット & シェービング',
        description: '人気のセットメニュー',
        price: '¥10,000',
        duration: '90min',
        isPopular: true,
      },
      {
        name: 'フルコース',
        description: 'カット、シェービング、ヘッドスパの贅沢な時間',
        price: '¥15,000',
        duration: '100min',
      },
    ],
  },
];

// ギャラリー
export const GALLERY_SLIDES: GallerySlide[] = [
  { src: '/images/gallery/gallery-1.jpg', alt: 'Gentleman Cut', title: 'Gentleman Cut', description: '大人の余裕を感じさせるスタイル' },
  { src: '/images/gallery/gallery-2.jpg', alt: 'Fresh Look', title: 'Fresh Look', description: 'すっきりとした爽やかなスタイル' },
  { src: '/images/gallery/gallery-3.jpg', alt: 'Soft Perm', title: 'Soft Perm', description: 'ゆるふわパーマで柔らかい印象に' },
  { src: '/images/gallery/gallery-4.jpg', alt: 'Classic Cut', title: 'Classic Cut', description: 'ビジネスシーンに最適' },
  { src: '/images/gallery/gallery-5.jpg', alt: 'Bold Style', title: 'Bold Style', description: '個性的な質感を活かして' },
  { src: '/images/gallery/gallery-6.jpg', alt: 'Natural Style', title: 'Natural Style', description: '自然な動きを活かしたスタイル' },
  { src: '/images/gallery/gallery-7.jpg', alt: 'Modern Fade', title: 'Modern Fade', description: 'クリーンなフェードスタイル' },
  { src: '/images/gallery/gallery-8.jpg', alt: 'Texture Wave', title: 'Texture Wave', description: 'ランダムウェーブで動きのあるスタイル' },
  { src: '/images/gallery/gallery-9.jpg', alt: 'Soft Curl', title: 'Soft Curl', description: 'ソフトカールで大人の色気を演出' },
  { src: '/images/gallery/gallery-10.jpg', alt: 'Clean Crop', title: 'Clean Crop', description: 'クロップスタイルで大人の印象に' },
];

// 得意な技術
export const SKILLS: Skill[] = [
  { name: 'クラシックバーバースタイル', years: 4 },
  { name: 'モダンフェードカット', years: 4 },
  { name: 'クラシックシェービング', years: 4 },
  { name: 'ヘアカラーリング', years: 4 },
];

// プライベートの好きなこと
export const HOBBIES: Hobby[] = [
  {
    icon: '🏄',
    name: 'サーフィン',
    description: '波と対話する、海との一体感',
  },
  {
    icon: '📷',
    name: '写真',
    description: 'スタイルの記録とライフスタイルの撮影',
  },
  {
    icon: '🎵',
    name: '音楽',
    description: 'ジャズとソウルミュージックで心地よい空間を',
  },
  {
    icon: '🏔️',
    name: 'アウトドア',
    description: '休日は自然の中でリフレッシュ',
  },
];

// Philosophy
export const PHILOSOPHIES = [
  {
    icon: '♡',
    title: 'こだわりの時間',
    description: '完全予約制で、一人ひとりに十分な時間をかけた丁寧な施術を心がけています。',
  },
  {
    icon: '👥',
    title: '対話を大切に',
    description: 'カウンセリングを通じて、お客様の個性とライフスタイルを深く理解します。',
  },
  {
    icon: '✦',
    title: '常に学び続ける',
    description: '最新のトレンドと伝統技術の両方を学び、常にスキルを磨き続けています。',
  },
];

// 連絡先
export const CONTACT_INFO = {
  phone: '080-1234-5678',
  email: 'takeshi@barber.jp',
  instagram: '@takeshi.barber',
  hours: [
    { days: '火・金', time: '10:00 - 20:00' },
    { days: '土・日', time: '10:00 - 19:00' },
    { days: '月曜日', time: '定休日' },
  ],
  address: {
    street: '東京都渋谷区神宮前 3-1-25',
    building: '神宮前ビル 2F',
    access: '表参道駅 A2出口より徒歩5分',
  },
};