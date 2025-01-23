import { useState } from "react";

const menuItems: { label: string; href: string }[] = [
  { label: "自分の記録", href: "/my-record" },
  { label: "体重グラフ", href: "/" },
  { label: "目標", href: "/" },
  { label: "選択中のコース", href: "/" },
  { label: "コラム一覧", href: "/" },
  { label: "設定", href: "/" },
];

const HambugerMenu = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <img
        src={`images/ico/${active ? "close" : "menu"}.svg`}
        onClick={() => setActive(!active)}
      />
      {active && (
        <div className="z-20 absolute w-[280px] right-[85px]">
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="border-b border-light text-white border-t border-opacity-[0.15] bg-gray-400"
              >
                <a
                  href={item.href}
                  className="block p-6 font-noto-san font-light text-lg"
                  aria-current="page"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default HambugerMenu;
