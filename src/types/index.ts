// サービスメニューの型
export type ServiceItem = {
  name: string;
  description: string;
  price: string;
  duration: string;
  isPopular?: boolean;
};

export type ServiceCategory = {
  category: string;
  items: ServiceItem[];
};

// ギャラリーの型
export type GalleryImage = {
  src: string;
  alt: string;
};

// ギャラリースライダーの型
export type GallerySlide = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

// 得意な技術の型
export type Skill = {
  name: string;
  years: number;
};

// プライベートの好きなことの型
export type Hobby = {
  icon: string;
  name: string;
  description: string;
};