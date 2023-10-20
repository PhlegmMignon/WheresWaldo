import { useEffect } from "react";

export default function Modal({ modalFound, modal, setModal }) {
  const MODAL_FAIL_STYLE = {
    backgroundColor: "#FF0800",
  };

  const MODAL_SUCCESS_STYLE = {
    backgroundColor: "#32cd32",
  };

  useEffect(() => {
    if (modal) {
      let ele = document.getElementById("modalParent");
      ele.style.display = "block";

      let pos = ele.getBoundingClientRect();
      ele.style.left = pos.left - 30 + "px";
      ele.style.top = pos.top + 50 + "px";

      setTimeout(() => {
        setModal(false);
        ele.style.display = "none";
      }, 3000);
    }
  }, [modal]);

  {
    return modalFound ? (
      <div
        id="modalParent"
        style={MODAL_SUCCESS_STYLE}
        className="fixed text-center p-3 z-10 rounded-lg h-14 w-40"
      >
        <div id="modal" className="text-xl">
          Success!
        </div>
      </div>
    ) : (
      <div
        id="modalParent"
        style={MODAL_FAIL_STYLE}
        className="fixed text-center p-3 z-10 rounded-lg h-14 w-40"
      >
        <div id="modal" className="text-xl">
          Try again
        </div>
      </div>
    );
  }
}
