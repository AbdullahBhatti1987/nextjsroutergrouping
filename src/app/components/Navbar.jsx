import Link from "next/link";

export default function page() {
  return (
    <>
      <div className={"flex w-full h-24 justify-center gap-8 items-center bg-gray-200 shadow-md"}>
        <Link className={"text-gray-500 hover:text-orange-600 hover:relative transition ease-out duration-200 "} href="/">Home</Link>
        <Link className={"text-gray-500 hover:text-orange-600 hover:relative transition ease-out duration-200 "} href={"/products"}>Products</Link>
        <Link className={"text-gray-500 hover:text-orange-600 hover:relative transition ease-out duration-200 "} href={"/quotes"}>Qoute</Link>
        <Link className={"text-gray-500 hover:text-orange-600 hover:relative transition ease-out duration-200 "} href={"/contactus"}>Contactus</Link>
        <Link className={"text-gray-500 hover:text-orange-600 hover:relative transition ease-out duration-200 "} href={"/bestseller"}>Best Seller</Link>
        <Link href="/login">
          <button type="primary" className="bg-blue-600 text-white py-2 px-4 rounded-sm">Login</button>
        </Link>
      </div>
    </>
  );
}
