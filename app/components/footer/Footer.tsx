const Footer = () => {
  return (
    <div className="mt-10 w-full max-w-screen-xl flex mx-auto p-14 gap-10 items-center shadow-md bg-dark-500">
      <div className="w-[960px] mx-auto">
        <div className="flex-1 flex gap-5 text-white font-noto-san font-light text-[11px] leading-[16px] tracking-[0.03px]">
          <a href="/">会員登録</a>
          <a href="/">運営会社</a>
          <a href="/">利用規約</a>
          <a href="/">個人情報の取扱について</a>
          <a href="/">特定商取引法に基づく表記</a>
          <a href="/">お問い合わせ</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;