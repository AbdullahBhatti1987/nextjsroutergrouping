

export default async function QuoteDetail({ params }) {
  const res = await fetch(`https://dummyjson.com/quotes/${params.id}`)
  const singleQoute = await res.json()

  return (
    <div className={"border-2 shadow-md w-full text-center p-4 m-2 hover:bg-gray-200 focus:bg-gray-400"}>
      <h1>Quote Detail Page</h1>
      <p>Quote ID: {singleQoute.id}</p>
      <div>
      </div> 
      <p>{singleQoute.quote}</p>
      <p>Quote By</p>
      <p className="underline">{singleQoute.author}</p>
      </div>
  );
}
