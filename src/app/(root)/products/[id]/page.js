export default async function Page({ params }) {

    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const postDetail = await res.json();
  
  return (
    <div>
      <h1>{postDetail.title}</h1>
      <img src={postDetail.thumbnail} alt={postDetail.title} />
      <p>Price: ${postDetail.price}</p>
      <p>{postDetail.description}</p>
    </div>
  );
}
