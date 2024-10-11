export default async function QuoteDetail({ params }) {
  const res = await fetch(`https://dummyjson.com/quotes/${params.id}`);
  const singleQoute = await res.json();

  return (
    <div
  
    >
      <h1 className={"text-2xl text-center py-4"}>Quote Detail</h1>
      <div className={"w-10/12 mx-auto "}>
        <p>Quote ID: {singleQoute.id}</p>
        <div></div>
        <p>{singleQoute.quote}</p>
        <p>Quote By</p>
        <p className="underline">{singleQoute.author}</p>
      </div>
    </div>
  );
}
