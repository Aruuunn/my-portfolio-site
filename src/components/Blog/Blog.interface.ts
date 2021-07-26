export interface Blog {
  id?: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  createdAt: string;
  source: string;
  coverImageUrl: string;
}
