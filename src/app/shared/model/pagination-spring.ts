
export interface PaginationSptring {
  content: Array<any>;
  pageable: {
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    },
    offset: number,
    pageNumber: number,
    pageSize: number,
    unpaged: boolean,
    paged: boolean
  };
  totalElements: number;
  last: boolean;
    totalPages: number;
    size: number;
    number: number;
    sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
    };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}
