
import Link from "next/link";

export default async function page({params}) {
   
    const category = await fetch('https://dummyjson.com/products/categories')
    const categories = await category.json();

    const res = await fetch(`https://dummyjson.com/products/category/${params.slug}`)
    const data = await res.json();
    const catdata = data.products

  return (  
    <div className="">
    <h1>Product List</h1>
    <div className={"w-10/12 mx-auto flex flex-wrap gap-4 my-6"}>
    <Link href={"/products"} className={"border bg-gray-200 hover:bg-gray-400 hover:shadow-lg shadow-sm p-2"}>
          All
        </Link>
    {categories.map((data) => (
    <Link key={data.slug} href={`/products/category/${data.slug}`}  className={"border bg-gray-200  hover:bg-blue-400 hover:text-white hover:rounded-md hover:shadow-lg shadow-sm p-2 transition ease-in-out duration-1000"}>
    {data.slug}
  </Link>))}      
    </div>

    <div className="flex flex-wrap mx-auto lg:w-10/12 gap-5">
      {catdata.map((data) => (
        <Link key={data.id} href={`/products/${data.id}`} className="lg:w-[calc(25%-1.5%)] bg-white flex flex-col justify-start items-center border-2 ">
        <div className={"w-full"}>
        <img src={data.thumbnail} className={"object-fit"} alt="" />
        <div className="w-full p-4">
          <h1 className="text-lg truncate text-left">{data.title}</h1>
          <h3 className="text-2xl text-left">${data.price}</h3>
          <div className={" py-4 flex justify-between items-center"}>
            <button className={"border rounded-md shadow-md p-2 bg-gray-200 hover:gray-400"}>Add to Cart</button>
            <button className={"border rounded-md shadow-md p-2 bg-gray-200 hover:gray-400"}>Buy Now</button>
          </div>
        </div>
      </div>
      </Link>
      ))}
    </div>
  </div>
  )
}
