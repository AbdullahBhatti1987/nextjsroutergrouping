import NavbarMenu from "../components/NavbarMenu";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";


export default function Header() {
  return (
    <div className={"flex h-24 bg-orange-200 overflow-visible"}>
      <Logo />
      <div className="dropdown h-full flex items-center">
        <NavbarMenu />
      </div>
      <div className="search h-full flex items-center">
            <SearchBar/>
      </div>
    </div>
  );
}
