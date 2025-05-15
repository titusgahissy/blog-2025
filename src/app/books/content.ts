
export interface Book {
  id: string
  title: string
  author: string
  description: string
  image: string
}


export const books: Book[] = [
  {
    id: "getting-things-done",
    title: "Getting Things Done",
    author: "David Allen",
    description: "This book had a bigger effect on my day-to-day practices and productivity than any book I've ever read.",
    image: "/img/books/getting-things-done.jpg"
  },
  {
    id: "all-marketers-tell-stories",
    title: "All Marketers Tell Stories",
    author: "Seth Godin",
    description: "I bookmarked so many quotes from this book! It is that good to understand the power of stories in marketing.",
    image: "/img/books/all-marketers-tell-stories.jpg"
  },
  {
    id: "clockwork",
    title: "Clockwork",
    author: "Mike Michalowicz",
    description: "Sometimes you are stuck and you're looking for *that* answer. This books might be it.",
    image: "/img/books/clockwork.jpg"
  },
  {
    id: "the-one-thing",
    title: "The One Thing",
    author: "Gary Keller",
    description: "This book will try to convince you that one-thing-at-a-time is your best bet. ",
    image: "/img/books/the-one-thing.jpg"
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    description: "It's a good read to understand how to build good habits and break bad ones.",
    image: "/img/books/atomic-habits.jpg"
  },
  {
    id: 'the-subtle-art-of-not-giving-a-fuck',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    description: "Just for the title, this book is a must-read.",
    image: '/img/books/the-subtle-art-of-not-giving-a-fuck.jpg'
  },
  {
    id: 'steal-like-an-artist',
    title: 'Steal Like an Artist',
    author: 'Austin Kleon',
    description: "The earlier (in life) you read this, the better. You will become a better thief, I mean artist.",
    image: '/img/books/steal-like-an-artist.jpg'
  },
  {
    id: 'fast-like-a-girl',
    title: 'Fast Like a Girl',
    author: 'Dr. Mindy Pelz',
    description: "Hint: it's not only for girls.",
    image: '/img/books/fast-like-a-girl.jpg'
  },
  {
    id: 'future-proofing-you',
    title: 'Future Proofing You',
    author: 'Jay Samit',
    description: "It distills twelve actionable truths that empower anyone-regardless of background-to create opportunities. ",
    image: '/img/books/future-proofing-you.jpg'
  },
  {
    id: 'the-mountain-is-you',
    title: 'The Mountain is You',
    author: 'Brianna Wiest',
    description: "This book should be mandatory reading for everyone in their 20s.",
    image: '/img/books/the-mountain-is-you.jpg'
  }
].sort((a, b) => a.title.localeCompare(b.title));