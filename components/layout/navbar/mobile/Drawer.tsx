"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import DrawerItem from "./DrawerItem";
import menuData from "./menuData";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function Drawer({ open, onClose }: DrawerProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[998] bg-black/45 backdrop-blur-[2px]"
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="
              fixed
              left-0
              top-0
              z-[999]
              flex
              h-screen
              w-[300px]
              flex-col
              bg-white
              shadow-2xl
            "
          >
            {/* Header */}

            <div className="flex items-center justify-between border-b p-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo/logo.png"
                  width={50}
                  height={50}
                  alt="Dishaa"
                />

                <div>
                  <h2 className="text-lg font-bold text-[#0A4B26]">DIISHAA</h2>

                  <p className="text-xs text-gray-500">Care Foundation</p>
                  <span className="text-xs font-medium text-[#F57C00]">
                    Ek Bharat Shrestha Bharat
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X size={22} className="text-black" />
              </button>
            </div>

            {/* Navigation */}

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {menuData.map((item) => (
                <DrawerItem key={item.title} {...item} onClick={onClose} />
              ))}
            </div>

            {/* Buttons */}

            <div className="border-t p-4 space-y-3">
              <Link
                href="/membership"
                onClick={onClose}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#0A5A18]
                  font-semibold
                  text-white
                "
              >
                Become a Member
              </Link>

              <Link
                href="/donate"
                onClick={onClose}
                className="
                  flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#F97316]
                  font-semibold
                  text-white
                "
              >
                <Heart size={18} />
                Donate Now
              </Link>
            </div>

            {/* Social */}

            <div className="border-t px-6 py-5">
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-white"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white"
                >
                  <FaYoutube />
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
