import "./Content.css";

import resume from "./media/resume.pdf";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  //   function openInNewTab(url) {
  //     var win = window.open(url, "_blank");
  //     win.focus();
  //   }

  const openInNewTab = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  };
  return (
    <div className="contentParent">
      <section className="menu">
        <span onClick={() => openInNewTab(resume)}>| Resume |</span>
        <span>| Projects |</span>
      </section>
    </div>
  );
}
