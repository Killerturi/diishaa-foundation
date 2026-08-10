"use client";

import { FormEvent, useState } from "react";
import {
  Send,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
} from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Backend/API integration will be added later.
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div
      id="contact-form"
      className="
        p-6
        sm:p-8
        lg:p-10
      "
    >
      {/* =========================
          HEADER
      ========================== */}

      <div className="mb-7">
        <div className="mb-3 flex items-center gap-3">
          <span
            className="
              h-[2px]
              w-8
              bg-[#F47B20]
            "
          />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#D4A13A]
            "
          >
            Send A Message
          </span>

          <span
            className="
              h-[2px]
              w-5
              bg-[#138A45]
            "
          />
        </div>

        <h2
          className="
            font-[var(--font-heading)]
            text-2xl
            font-bold
            text-[#063B20]
            sm:text-3xl
          "
        >
          How Can We Help?
        </h2>

        <p
          className="
            mt-2
            max-w-xl
            text-sm
            leading-6
            text-gray-500
          "
        >
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>
      </div>

      {/* =========================
          SUCCESS MESSAGE
      ========================== */}

      {submitted && (
        <div
          className="
            mb-6
            flex
            items-start
            gap-3
            rounded-xl
            border
            border-[#B8DCC4]
            bg-[#EFF8F2]
            px-4
            py-3
            text-[#063B20]
          "
        >
          <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#138A45]" />

          <div>
            <p className="text-sm font-bold">Message sent successfully!</p>

            <p className="mt-1 text-xs text-gray-600">
              Thank you for reaching out to Dishaa Care Foundation.
            </p>
          </div>
        </div>
      )}

      {/* =========================
          FORM
      ========================== */}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Email */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Name */}

          <div>
            <label
              htmlFor="contact-name"
              className="
                mb-2
                block
                text-xs
                font-bold
                text-[#063B20]
              "
            >
              Name <span className="text-[#F47B20]">*</span>
            </label>

            <div className="relative">
              <User
                size={16}
                strokeWidth={1.8}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#138A45]
                "
              />

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[#E5DED2]
                  bg-[#FFFEFC]
                  pl-11
                  pr-4
                  text-sm
                  text-[#222]
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-gray-400
                  hover:border-[#D4C9B8]
                  focus:border-[#138A45]
                  focus:bg-white
                  focus:ring-2
                  focus:ring-[#138A45]/10
                "
              />
            </div>
          </div>

          {/* Email */}

          <div>
            <label
              htmlFor="contact-email"
              className="
                mb-2
                block
                text-xs
                font-bold
                text-[#063B20]
              "
            >
              Email <span className="text-[#F47B20]">*</span>
            </label>

            <div className="relative">
              <Mail
                size={16}
                strokeWidth={1.8}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#F47B20]
                "
              />

              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[#E5DED2]
                  bg-[#FFFEFC]
                  pl-11
                  pr-4
                  text-sm
                  text-[#222]
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-gray-400
                  hover:border-[#D4C9B8]
                  focus:border-[#F47B20]
                  focus:bg-white
                  focus:ring-2
                  focus:ring-[#F47B20]/10
                "
              />
            </div>
          </div>
        </div>

        {/* Phone + Location */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Phone */}

          <div>
            <label
              htmlFor="contact-phone"
              className="
                mb-2
                block
                text-xs
                font-bold
                text-[#063B20]
              "
            >
              Phone Number
              <span className="ml-1 font-normal text-gray-400">(optional)</span>
            </label>

            <div className="relative">
              <Phone
                size={16}
                strokeWidth={1.8}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#D4A13A]
                "
              />

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[#E5DED2]
                  bg-[#FFFEFC]
                  pl-11
                  pr-4
                  text-sm
                  text-[#222]
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-gray-400
                  hover:border-[#D4C9B8]
                  focus:border-[#D4A13A]
                  focus:bg-white
                  focus:ring-2
                  focus:ring-[#D4A13A]/10
                "
              />
            </div>
          </div>

          {/* Location */}

          <div>
            <label
              htmlFor="contact-location"
              className="
                mb-2
                block
                text-xs
                font-bold
                text-[#063B20]
              "
            >
              Location
            </label>

            <div className="relative">
              <MapPin
                size={16}
                strokeWidth={1.8}
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#138A45]
                "
              />

              <input
                id="contact-location"
                name="location"
                type="text"
                placeholder="City / District"
                className="
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-[#E5DED2]
                  bg-[#FFFEFC]
                  pl-11
                  pr-4
                  text-sm
                  text-[#222]
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-gray-400
                  hover:border-[#D4C9B8]
                  focus:border-[#138A45]
                  focus:bg-white
                  focus:ring-2
                  focus:ring-[#138A45]/10
                "
              />
            </div>
          </div>
        </div>

        {/* Subject */}

        <div>
          <label
            htmlFor="contact-subject"
            className="
              mb-2
              block
              text-xs
              font-bold
              text-[#063B20]
            "
          >
            Subject <span className="text-[#F47B20]">*</span>
          </label>

          <div className="relative">
            <MessageSquare
              size={16}
              strokeWidth={1.8}
              className="
                pointer-events-none
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-[#D4A13A]
              "
            />

            <select
              id="contact-subject"
              name="subject"
              required
              defaultValue=""
              className="
                h-12
                w-full
                appearance-none
                rounded-xl
                border
                border-[#E5DED2]
                bg-[#FFFEFC]
                pl-11
                pr-4
                text-sm
                text-[#222]
                outline-none
                transition-all
                duration-200
                hover:border-[#D4C9B8]
                focus:border-[#D4A13A]
                focus:bg-white
                focus:ring-2
                focus:ring-[#D4A13A]/10
              "
            >
              <option value="" disabled>
                Select a subject
              </option>

              <option value="general">General Enquiry</option>

              <option value="volunteer">Volunteering</option>

              <option value="donation">Donation</option>

              <option value="partnership">Partnership</option>

              <option value="event">Events & Activities</option>

              <option value="support">Support</option>

              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}

        <div>
          <label
            htmlFor="contact-message"
            className="
              mb-2
              block
              text-xs
              font-bold
              text-[#063B20]
            "
          >
            Message <span className="text-[#F47B20]">*</span>
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Write your message here..."
            required
            className="
              min-h-[140px]
              w-full
              resize-y
              rounded-xl
              border
              border-[#E5DED2]
              bg-[#FFFEFC]
              px-4
              py-3
              text-sm
              leading-6
              text-[#222]
              outline-none
              transition-all
              duration-200
              placeholder:text-gray-400
              hover:border-[#D4C9B8]
              focus:border-[#F47B20]
              focus:bg-white
              focus:ring-2
              focus:ring-[#F47B20]/10
            "
          />
        </div>

        {/* Privacy note */}

        <p
          className="
            max-w-2xl
            text-[10px]
            leading-5
            text-gray-400
          "
        >
          By submitting this form, you agree that Dishaa Care Foundation may use
          the information provided to respond to your enquiry.
        </p>

        {/* Submit Button */}

        <button
          type="submit"
          className="
            group
            inline-flex
            h-12
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#F47B20]
            px-7
            text-sm
            font-bold
            text-white
            shadow-[0_8px_20px_rgba(244,123,32,0.18)]
            transition-all
            duration-300
            hover:bg-[#E96D12]
            hover:shadow-[0_12px_25px_rgba(244,123,32,0.25)]
            active:scale-[0.98]
            sm:w-auto
            sm:min-w-[165px]
          "
        >
          <Send
            size={16}
            strokeWidth={2}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
          Send Message
        </button>
      </form>
    </div>
  );
}
