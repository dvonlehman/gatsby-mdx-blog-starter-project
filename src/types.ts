export interface Site {
  siteMetadata: {
    siteUrl: string;
    author: string;
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface FrontMatter {
  title: string;
  date: string;
  banner: {
    childImageSharp: {
      sizes: object;
    };
  };
  categories: string[];
  keywords: string[];
  description: string;
}

export interface Mdx {
  frontmatter: FrontMatter;
  code: {
    body: string;
  };
}

export interface PageInfo {
  fields: {
    slug: string;
    title: string;
  };
}

export interface PageContext {
  next: PageInfo;
  prev: PageInfo;
}
