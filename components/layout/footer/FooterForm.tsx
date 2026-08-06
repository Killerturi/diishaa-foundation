"use client";

import { useState } from "react";

export default function FooterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO:
    // Connect with your backend API

    console.log(form);

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      {/* Heading */}

      <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-[#d4af37]">
        Send Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-xl
            border
            border-white/20
            bg-white/10
            px-4
            py-3
            text-white
            placeholder:text-gray-400
            outline-none
            transition
            focus:border-[#d4af37]
          "
        />

        {/* Email */}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-xl
            border
            border-white/20
            bg-white/10
            px-4
            py-3
            text-white
            placeholder:text-gray-400
            outline-none
            transition
            focus:border-[#d4af37]
          "
        />

        {/* Subject */}

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-xl
            border
            border-white/20
            bg-white/10
            px-4
            py-3
            text-white
            placeholder:text-gray-400
            outline-none
            transition
            focus:border-[#d4af37]
          "
        />

        {/* Message */}

        <textarea
          rows={4}
          name="message"
          placeholder="Write your message..."
          value={form.message}
          onChange={handleChange}
          required
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-white/20
            bg-white/10
            px-4
            py-3
            text-white
            placeholder:text-gray-400
            outline-none
            transition
            focus:border-[#d4af37]
          "
        />

        {/* Button */}

        <button
          type="submit"
          className="
            w-full
            rounded-xl
            bg-[#d4af37]
            py-3
            font-semibold
            text-black
            transition-all
            duration-300
            hover:bg-yellow-400
            hover:shadow-lg
          "
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
