export interface NewsItem {
  title: string;
  date: string;
  image: string;
  url: string;
}

export interface TestimonialItem {
  name: string;
  message: string;
  source: string;
}

export interface HomeContent {
  news: NewsItem[];
  testimonials: TestimonialItem[];
}
