import { PlusIconDivider } from "@/components/icons";
import {
  Container,
  PageHeader,
  PageSubtitle,
  PageTitle,
} from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { Book, books as resources } from "./content";

export default function Page() {
  return (
    <Container>
      <PageHeader>
        <PageTitle>The Library</PageTitle>
        <PageSubtitle>
          Sharing books and resources that stuck with me.
        </PageSubtitle>
      </PageHeader>
      <BookList />
    </Container>
  );
}

const BookList = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 mt-4 md:mt-12 border-l border-t border-neutral-300 dark:border-neutral-700 relative">
    <PlusIconDivider className="absolute top-0 left-0 -translate-x-5 md:-translate-x-6 -translate-y-5 md:-translate-y-6" />
    {resources.map((book) => (
      <ResourceCard key={book.title} book={book} />
    ))}
  </div>
);

const ResourceCard = ({ book }: { book: Book }) => (
  <div className="flex flex-col gap-4 border-b border-r px-4 md:px-6 py-4 md:py-8 border-neutral-300 dark:border-neutral-700">
    <div className="relative  overflow-hidden shadow-sm h-52 md:h-72 xl:h-96">
      <Image
        src={book.image}
        alt={book.title}
        fill
        className="object-cover object-top"
        blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div>
      <h3 className="font-heading font-semibold text-xl/6 md:text-[1.7rem]/8">
        {book.title}
      </h3>
      <div>{book.author}</div>
      <ResourceLink book={book} />
      <p className="pt-2 text-xs md:text-sm font-medium leading-relaxed">
        {book.description}
      </p>
    </div>
  </div>
);

const ResourceLink = ({ book }: { book: Book }) => {
  if (!book.url) {
    return null;
  }

  if (book.type === "book") {
    return (
      <Link
        href={book.url}
        className="text-sm font-medium leading-relaxed text-accent "
      >
        <span className="underline">Get your copy</span>
        <span className="text-[0.6rem] ml-0.5 ">↗</span>
      </Link>
    );
  }
  return (
    <Link
      href={book.url}
      className="text-sm font-medium leading-relaxed text-accent "
    >
      <span className="underline">Visit website</span>
      <span className="text-[0.6rem] ml-0.5 ">↗</span>
    </Link>
  );
};
