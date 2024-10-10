import Link from "next/link";

export default async function page() {
  const res = await fetch("https://dummyjson.com/quotes")
  const quotes = await res.json()




  return (
    <div>
      <h1>Quote page</h1>
      <div className={"flex flex-wrap"}>
      {quotes.quotes.map((data) => (
        <Link className={"border-2 shadow-md w-full text-center p-4 m-2 hover:bg-gray-200 focus:bg-gray-400"} href={`/quotes/${data.id}`} key={data.id}>
        <blockquote>
          "{data.quote}" <cite>— {data.author}</cite>
        </blockquote>
      </Link>
      ))}
      </div>
    </div>
  )
}
