import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { quickLinks, projectLinks, footerInfo } from "./data";

import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#082915] text-white border-t-2 border-t-[#C89B3C]/400 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)] rounded-t-3xl"
      style={{
        backgroundImage: "url('/footer/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#04160d]/85" />

      {/* Content */}

      <div className="relative mx-auto max-w-[1700px] px-6 py-16">
        <div className="grid gap-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Logo */}

          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/footer/logo.png"
                alt="Dishaa Care Foundation"
                width={170}
                height={170}
                priority
              />

              <div className="leading-tight">
                <h1 className="text-2xl font-white uppercase tracking-wide">
                  Diishaa
                </h1>

                <p className="font-semibold  font-underline text-sm text-gray-700">
                  CARE FOUNDATION
                </p>

                <span className="text-xs font-medium text-[#F57C00]">
                  Ek Bharat Shrestha Bharat
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-gray-300">
              {footerInfo.description}
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">
              <Link
                href={footerInfo.social.facebook}
                className="rounded-full border border-[#D4AF37]/30 bg-white/10 p-3 transition hover:bg-[#D4AF37] hover:text-black"
              >
                <FaFacebookF />
              </Link>

              <Link
                href={footerInfo.social.instagram}
                className="rounded-full border border-[#D4AF37]/30 bg-white/10 p-3 transition hover:bg-[#D4AF37] hover:text-black"
              >
                <FaInstagram />
              </Link>

              <Link
                href={footerInfo.social.youtube}
                className="rounded-full border border-[#D4AF37]/30 bg-white/10 p-3 transition hover:bg-[#D4AF37] hover:text-black"
              >
                <FaYoutube />
              </Link>

              <Link
                href={footerInfo.social.whatsapp}
                className="rounded-full border border-[#D4AF37]/30 bg-white/10 p-3 transition hover:bg-[#D4AF37] hover:text-black"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>

          {/* Quick Links */}

          <FooterColumn title="Quick Links" links={quickLinks} />

          {/* Projects */}

          <FooterColumn title="Our Projects" links={projectLinks} />

          {/* Contact */}

          <div className="relative">
            <div className="absolute -left-6 top-0 hidden h-full w-px bg-[#D4AF37]/40 lg:block" />

            <h3 className="mb-6 text-lg font-bold uppercase text-[#D4AF37]">
              Contact Us
            </h3>

            <div className="space-y-6 text-gray-300">
              <div className="flex gap-3">
                <MapPin className="mt-1 text-[#D4AF37]" size={20} />

                <div>
                  {footerInfo.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#D4AF37]" />

                <a href={`tel:${footerInfo.phone}`}>{footerInfo.phone}</a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#D4AF37]" />

                <a href={`mailto:${footerInfo.email}`}>{footerInfo.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="relative border-t border-[#D4AF37]/20">
        <div className="mx-auto flex max-w-[1700px] flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Dishaa Care Foundation. All Rights
            Reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="hover:text-[#D4AF37]">
              Privacy Policy
            </Link>

            <Link href="/terms-and-conditions" className="hover:text-[#D4AF37]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
