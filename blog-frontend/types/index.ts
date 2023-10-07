interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

interface ICategoryAttribute {
  Title: string;
  slug: string;
  publishedAt: string;
}

interface ICollectionResponse<T> {
  data: T;
  meta: IMetaSource;
}

// for metadata
interface IMetaSource {
  pagination: Ipagination;
}

interface Ipagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// for articles
interface IArticle {
  id: number;
  attributes: IArticleAttribute;
}
interface IImage {
    data: {
        attributes: {
            url: string;
            formats: {
                small: {
                    url: string;
                };
            };
        };
    };

}
interface IArticleAttribute {
  Title: string;
  Content: string;
  Image:IImage
  Slug: string;
  createdAt: string;
  author: IAuthor;
}



// author type define
interface IAuthor {
  data: {
    attributes: {
        username: string;
        avatar: {
            data: {
                attributes: {
                    formats: {
                        thumbnail: {
                            url: string;
                        };
                    };
                };
            };
        };
    };
};
}


