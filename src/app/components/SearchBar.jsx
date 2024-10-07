import { Input } from "@/components/ui/input";

export default function SearchBar() {
  return (
    <div>
      <Input placeHolder={"Search products"} className={"border-t-0 border-s-0 border-e-0 rounded-none p-2 border-b-2 border-gray"}/>
    </div>
  );
}
