import { X } from "lucide-react";
import Button from "../Button";
import StrokeBackground from "../StrokeBackground";
import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
};

const MobileNav = ({ open, onClose }: Props) => {
  return (
    <div
      className={`fixed inset-0 ${
        open ? "visible dark:bg-black bg-blue-50" : "invisible"
      } transition-all duration-500 z-50 h-screen p-4`}
      onClick={onClose}
    >
      <div className="w-full h-full p-2" onClick={onClose}>
        <StrokeBackground />
        <div onClick={onClose} className="flex items-end justify-end">
          <X />
        </div>
        <div className="flex flex-col gap-4 h-full items-center justify-center">
          <Link href="/projects">
            <Button
              type="button"
              variant="primary"
              className="bg-black text-white"
            >
              Projects
            </Button>
          </Link>
          <Link href="/about">
            <Button
              type="button"
              variant="primary"
              className="bg-black text-white"
            >
              About
            </Button>
          </Link>
          <Link href="mailto:smaranshaha@gmail.com" target="_blank">
            <Button
              type="button"
              variant="primary"
              className="bg-black text-white"
            >
              Contact me
            </Button>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1-ZN_L4FRibf8TwXGjwVw4YYeE7P4JyMB/view?usp=sharing"
            target="_blank"
          >
            <Button
              type="button"
              variant="primary"
              className="bg-black text-white"
            >
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
