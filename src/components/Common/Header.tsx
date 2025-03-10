import Link from "next/link";

export default function Header() {
    const navLinks = 
    [
        { name: "Bootcamp", href: "/" },
        { name: "MasterClass", href: "/" },
        { name: "Features", href: "/products" },
        { name: "Modules", href: "/about" },
    ]
    return (
        <>
        <div className="flex bg-[#ff5900] justify-center items-center p-1">
            <p className="text-black font-sans text-sm font-medium">
                Follow us on <Link href="https://www.instagram.com/" className="underline">
                    Instagram
                </Link> for new batch updates
            </p>
        </div>
        <div className="flex justify-between items-center px-14 py-5 sticky top-0 bg-black z-10">
            <div>
                <Link href="/">
                    <p>
                        <img src="/images/tarde-logo.png" alt="logo" className="h-12" />
                    </p>
                </Link>
            </div>

            <div className="flex space-x-5 font-sans">
                {
                    navLinks.map((link, index) => (
                        <Link href={link.href} key={index}>
                            <p className="text-white text-md font-medium hover:text-[#ff5900]">{link.name}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
        </>
    );
}