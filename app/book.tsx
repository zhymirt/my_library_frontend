import "~/book.css";

export interface BookInfo {
  title: string,
  authors: string[],
  img_url: string,
}

export function Book({ title, authors, img_url }: BookInfo) {
  let author_string = "";
  switch (authors.length) {
    case 0:
      author_string = "No author";
      break;
    case 1:
      author_string = authors[0];
      break;
    default:
      author_string = authors.join(", ");
  }
  return (
    <div className="book">
      {(img_url != "") ? <img src={img_url} alt={"cover for book titled: " + title}></img> : <div></div>}
      <p>{title}</p>
      <p>By: {author_string}</p>
    </div>
  );
}

export function BookV1({ title, authors, img_url}: BookInfo) {
  // let title = props.title;
  // let authors = props.authors;
  // let img_url = props.img_url;
  let author_string = "";
  switch (authors.length) {
    case 0:
      author_string = "No author";
      break;
    case 1:
      author_string = authors[0];
      break;
    default:
      author_string = authors.join(", ");
  }
  return (
    <div className="book">
      {(img_url != "") ? <img src={img_url} alt={"cover for book titled: " + title}></img> : <div></div>}
      <p>{title}</p>
      <p>By: {author_string}</p>
    </div>
  );
}

export function BookV2({props}: {props: BookInfo}) {
  let title = props.title;
  let authors = props.authors;
  let img_url = props.img_url;
  let author_string = "";
  switch (authors.length) {
    case 0:
      author_string = "No author";
      break;
    case 1:
      author_string = authors[0];
      break;
    default:
      author_string = authors.join(", ");
  }
  return (
    <div className="book">
      {(img_url != "") ? <img src={img_url} alt={"cover for book titled: " + title}></img> : <div></div>}
      <p>{title}</p>
      <p>By: {author_string}</p>
    </div>
  );
}
