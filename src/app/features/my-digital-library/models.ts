export interface LibraryBookModel {
  id: string;
  title: string;
  author: {
    firstname: string;
    lastname: string;
  };
  format: string;
}
