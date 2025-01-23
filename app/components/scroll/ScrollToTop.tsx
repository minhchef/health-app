const ScrollToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="sticky w-full max-w-screen-xl flex justify-end bottom-0 pb-3 pr-5 transition cursor-pointer mx-auto"
      onClick={handleScrollToTop}
    >
      <img src="/images/ico/scroll.svg" />
    </div>
  );
};
export default ScrollToTop;
