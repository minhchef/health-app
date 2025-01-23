import HambugerMenu from "./HambugerMenu";

const Header = () => {
    return (
        <div className="w-full max-w-screen-xl flex justify-between mx-auto p-2 gap-10 items-center shadow-md bg-dark-500">
            <a className="flex flex-[0.9] content-center" href="/meals"><img className="mx-auto" src="images/logo.svg" /></a>
            <div className="flex-1 flex justify-between p-2 text-white font-noto-san font-light text-base">
                <a className="flex flex-1 gap-2" href="/my-record"><img src="images/ico/book.svg" /><span>自分の記録</span></a>
                <a className="flex flex-1 gap-2"><img src="images/ico/medal.svg" /><span>チャレンジ</span></a>
                <a className="flex flex-1 gap-2"><img src="images/ico/info.svg" /><span>お知らせ</span></a>
            </div>
            <div className="flex-[0.2] p-1 cursor-pointer relative">
                <HambugerMenu />
            </div>
        </div>
    );
}

export default Header;
