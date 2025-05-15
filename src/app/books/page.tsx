import { PageHeader, PageLayout, PageSubtitle, PageTitle } from "@/components/layout";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { Book, books } from "./content";

export default function Page() {
  return (
    <PageLayout wide>
      <PageHeader>
        <PageTitle>The Library</PageTitle>
        <PageSubtitle>Books that stuck with me (the order is alphabetical)</PageSubtitle>
      </PageHeader>
      <BookList />
    </PageLayout>
  )
}


const BookList = () => (
  <div className="grid grid-cols-4  mt-12 border-l border-t border-neutral-300 relative">
    <PlusIcon className="text-neutral-500 size-7 absolute top-0 left-0 -translate-x-3.5 -translate-y-3.5" strokeWidth={1} />
    {books.map((book) => (
      <BookCard2 key={book.title} book={book} />
    ))}
  </div>
)


const BookCard = ({ book }: { book: Book }) => (
  <div className="flex gap-4 border-b border-r  px-6 py-8 border-neutral-300">
    <div className="w-1/3 flex  relative h-44 rounded-sm overflow-hidden shadow-sm">
      <Image src={book.image} alt={book.title} width={610} height={920} />
    </div>
    <div className="w-2/3 pt-8">
      <h3 className="pt-4 font-heading font-semibold text-lg leading-tight">{book.title}</h3>
      <div>{book.author}</div>
      <p className="pt-2 text-sm font-normal leading-relaxed">{book.description}</p>
    </div>
  </div >
)


const BookCard2 = ({ book }: { book: Book }) => (
  <div className="flex flex-col gap-4 border-b border-r px-6 py-8 border-neutral-300">
    <div className="relative rounded-lg overflow-hidden shadow-sm h-96">
      <Image src={book.image} alt={book.title} fill className="object-cover object-top" />
    </div>
    <div >
      <h3 className="font-heading font-semibold text-lg leading-tight">{book.title}</h3>
      <div>{book.author}</div>
      <p className="pt-2 text-sm font-normal leading-relaxed">{book.description}</p>
    </div>
  </div >
)