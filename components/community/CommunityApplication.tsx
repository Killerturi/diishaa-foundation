"use client";

import { FormEvent, useState } from "react";
import IndianStateSelect from "./IndianStateSelect";
import GenderSelect from "./GenderSelect";

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  occupation: string;
  reason: string;
  agree: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  mobile: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  occupation: "",
  reason: "",
  agree: false,
};

export default function CommunityApplication() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!formData.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.mobile.trim()) {
      setError("Please enter your mobile number.");
      return;
    }

    if (!formData.address.trim()) {
      setError("Please enter your address.");
      return;
    }

    if (!formData.city.trim()) {
      setError("Please enter your city.");
      return;
    }

    if (!formData.state.trim()) {
      setError("Please select your state.");
      return;
    }

    if (!formData.pincode.trim()) {
      setError("Please enter your PIN code.");
      return;
    }

    if (!formData.agree) {
      setError("Please agree to the community membership terms.");
      return;
    }

    /*
      BACKEND WILL BE CONNECTED HERE LATER.

      Example future flow:

      const response = await fetch(
        "/api/community/applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Application failed");
      }
    */

    try {
      setIsSubmitting(true);

      // Temporary delay to simulate submission.
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================
     SUCCESS STATE
  ========================================== */

  if (submitted) {
    return (
      <section
        id="community-application"
        className="scroll-mt-24 bg-slate-50 py-10 sm:py-20 lg:py-10"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            {/* TRICOLOR ACCENT */}
            <div className="flex h-1.5">
              <div className="w-1/3 bg-[#FF9933]" />
              <div className="w-1/3 bg-[#0B3D91]" />
              <div className="w-1/3 bg-[#138808]" />
            </div>

            <div className="px-5 py-12 text-center sm:px-10 sm:py-16">
              {/* SUCCESS ICON */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#138808]/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#138808] text-xl font-bold text-white">
                  ✓
                </span>
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#138808]">
                APPLICATION SUBMITTED
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl">
                Thank You, {formData.fullName.split(" ")[0]}!
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Your Community Membership application has been submitted
                successfully.
              </p>

              {/* STATUS */}
              <div className="mx-auto mt-7 max-w-md rounded-2xl border border-[#FF9933]/20 bg-[#FF9933]/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C66A00]">
                  Current Status
                </p>

                <p className="mt-2 text-lg font-black text-slate-950">
                  Pending Admin Review
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Our team will review your application. Payment will be
                  requested only after your application is approved.
                </p>
              </div>

              {/* APPLICATION REFERENCE */}
              <div className="mt-7">
                <p className="text-xs text-slate-400">Application Reference</p>

                <p className="mt-1 font-mono text-sm font-bold text-[#0B3D91]">
                  DCF-PENDING
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================
     FORM
  ========================================== */

  return (
    <section
      id="community-application"
      className="scroll-mt-24 bg-slate-50 py-12 sm:py-12 lg:py-12"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* =====================================
            HEADER
        ====================================== */}

        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#FF9933]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF9933]">
              JOIN NOW
            </p>

            <span className="h-1 w-8 rounded-full bg-[#138808]" />
          </div>

          <h2 className="mt-3 text-2xl font-black text-slate-950 sm:text-3xl lg:text-4xl">
            Community Member Application
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Complete the form below to apply for Diishaa Community Membership.
            Your application will be reviewed by our team before payment is
            requested.
          </p>
        </div>

        {/* =====================================
            FORM CARD
        ====================================== */}

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 sm:mt-12">
          {/* TRICOLOR TOP */}
          <div className="flex h-1.5">
            <div className="w-1/3 bg-[#FF9933]" />
            <div className="w-1/3 bg-[#0B3D91]" />
            <div className="w-1/3 bg-[#138808]" />
          </div>

          <form onSubmit={handleSubmit} className="p-5 sm:p-8 lg:p-10">
            {/* =================================
                PERSONAL INFORMATION
            ================================== */}

            <div>
              <h3 className="text-lg font-black text-slate-950">
                Personal Information
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Please provide your basic details.
              </p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {/* FULL NAME */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                  <span className="ml-1 text-[#FF9933]">*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B3D91] focus:ring-4 focus:ring-[#0B3D91]/10"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                  <span className="ml-1 text-[#FF9933]">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B3D91] focus:ring-4 focus:ring-[#0B3D91]/10"
                />
              </div>

              {/* MOBILE */}
              <div>
                <label
                  htmlFor="mobile"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Mobile Number
                  <span className="ml-1 text-[#FF9933]">*</span>
                </label>

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={10}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B3D91] focus:ring-4 focus:ring-[#0B3D91]/10"
                />
              </div>

              {/* DATE OF BIRTH */}
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Date of Birth
                </label>

                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-[#0B3D91] focus:ring-4 focus:ring-[#0B3D91]/10"
                />
              </div>

              {/* GENDER */}
              <div>
                <label
                  htmlFor="gender"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Gender
                </label>

                <GenderSelect
                  value={formData.gender}
                  onChange={(value) =>
                    setFormData((previous) => ({
                      ...previous,
                      gender: value,
                    }))
                  }
                />
              </div>
            </div>

            {/* =================================
                ADDRESS
            ================================== */}

            <div className="mt-10 border-t border-slate-100 pt-8">
              <h3 className="text-lg font-black text-slate-950">Address</h3>

              <p className="mt-1 text-sm text-slate-500">
                Tell us where you are based.
              </p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {/* ADDRESS */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Address
                  <span className="ml-1 text-[#FF9933]">*</span>
                </label>

                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your full address"
                  rows={3}
                  autoComplete="street-address"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B3D91] focus:ring-4 focus:ring-[#0B3D91]/10"
                />
              </div>

              {/* CITY */}
              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  City
                  <span className="ml-1 text-[#FF9933]">*</span>
                </label>

                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  autoComplete="address-level2"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B3D91] focus:ring-4 focus:ring-[#0B3D91]/10"
                />
              </div>

              {/* STATE */}
              {/* STATE */}

              <div>
                <label
                  htmlFor="state"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  State
                  <span className="ml-1 text-[#FF9933]">*</span>
                </label>

                <IndianStateSelect
                  value={formData.state}
                  onChange={(value) =>
                    setFormData((previous) => ({
                      ...previous,
                      state: value,
                    }))
                  }
                />
              </div>

              {/* PINCODE */}
              <div>
                <label
                  htmlFor="pincode"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  PIN Code
                  <span className="ml-1 text-[#FF9933]">*</span>
                </label>

                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-digit PIN code"
                  inputMode="numeric"
                  maxLength={6}
                  autoComplete="postal-code"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B3D91] focus:ring-4 focus:ring-[#0B3D91]/10"
                />
              </div>

              {/* OCCUPATION */}
              <div>
                <label
                  htmlFor="occupation"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Occupation
                </label>

                <input
                  id="occupation"
                  name="occupation"
                  type="text"
                  value={formData.occupation}
                  onChange={handleChange}
                  placeholder="Student, Teacher, Business, etc."
                  autoComplete="organization-title"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B3D91] focus:ring-4 focus:ring-[#0B3D91]/10"
                />
              </div>
            </div>

            {/* =================================
                ABOUT YOU
            ================================== */}

            <div className="mt-10 border-t border-slate-100 pt-8">
              <h3 className="text-lg font-black text-slate-950">
                About Your Interest
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Tell us why you would like to join the Diishaa community.
              </p>
            </div>

            <div className="mt-6">
              <label
                htmlFor="reason"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Why would you like to join?
              </label>

              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Tell us a little about your interest..."
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0B3D91] focus:ring-4 focus:ring-[#0B3D91]/10"
              />
            </div>

            {/* =================================
                TERMS
            ================================== */}

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#0B3D91]"
                />

                <span className="text-xs leading-5 text-slate-600 sm:text-sm">
                  I confirm that the information provided by me is accurate and
                  I agree to the Diishaa Community Membership terms and
                  conditions.
                </span>
              </label>
            </div>

            {/* =================================
                ERROR
            ================================== */}

            {error && (
              <div
                role="alert"
                className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
              >
                {error}
              </div>
            )}

            {/* =================================
                SUBMIT
            ================================== */}

            <div className="mt-7">
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#FF9933]
                  px-6
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-[#FF9933]/20
                  transition-all
                  duration-300
                  hover:bg-[#E88921]
                  hover:shadow-xl
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:w-auto
                  sm:min-w-[220px]
                "
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <span className="ml-2 text-base">→</span>
                  </>
                )}
              </button>
            </div>

            {/* PAYMENT NOTICE */}
            <p className="mt-4 text-center text-[11px] leading-5 text-slate-400 sm:text-left">
              No payment is required at this stage. Payment will be requested
              only if your application is approved by the Diishaa team.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
