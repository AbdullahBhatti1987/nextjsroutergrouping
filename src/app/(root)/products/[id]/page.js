export default async function Page({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const postDetail = await res.json();

  return (
    <div className={"w-full flex justify-center items-center"}>
      <div className={"lg:w-8/12 flex flex-row border-2 p-8 gap-8 shadow-lg lg:mt-8"}>
        <div className={"w-6/12 h-full justify-center items-center border-4"}>
          <img
            className={"w-full"}
            src={postDetail.thumbnail}
            alt={postDetail.title}
          />
        </div>
        <div className={"w-6/12 flex flex-col justify-center"}>
          <h1 className={"text-4xl"}>{postDetail.title}</h1>
          <p className={"text-2xl text-blue-800 py-6"}>Price: ${postDetail.price}</p>
          <p>{postDetail.description}</p>
              <div className={" py-4 flex gap-4 items-center"}>
                <button className={"border rounded-md focus:shadow-sm shadow-md p-2 bg-gray-200 hover:gray-400"}>Add to Cart</button>
                <button className={"border rounded-md focus:shadow-sm shadow-md p-2 bg-gray-200 hover:gray-400"}>Buy Now</button>
              </div>
        </div>
      </div>
    </div>
  );
}
