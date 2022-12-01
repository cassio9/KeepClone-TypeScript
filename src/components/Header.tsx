import KeepLogo from "../assets/keeps.png";

function Header() {
	return (
		<header className="flex items-center">
			<img className="w-20" src={KeepLogo} alt="Keep Logo" />
			<h1 className="text-3xl text-[#606567] font-bold">Keep</h1>
		</header>
	);
}

export default Header;
