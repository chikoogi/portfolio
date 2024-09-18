import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import IconClose from "@/assets/icon/ic_close.svg";

export default function Modal({ isOpen, onClose, children }: any) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up when the modal is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    setMounted(true); // 컴포넌트가 브라우저에서 마운트되었는지 확인
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
      <div className="fixed inset-0 opacity-70 bg-black" onClick={onClose}></div>
      <div className="bg-white p-10 rounded-lg z-10 min-w-[1000px] min-h-[800px] relative">
        <div className={"header"}>
          <button className={"absolute text-black right-5 top-5"} onClick={onClose}>
            <IconClose color={"#000"} />
          </button>
        </div>
        <div className={"content w-full h-full"}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}
