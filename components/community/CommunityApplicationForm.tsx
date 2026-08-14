"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import GenderSelect from "./GenderSelect";
import IndianStateSelect from "./IndianStateSelect";

interface CommunityApplicationFormProps {
  onSubmit?: (data: CommunityApplicationData) => void;
}

export interface CommunityApplicationData {
  fullName: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  occupation: string;
  interest: string;
  consent: boolean;
}

export default function CommunityApplicationForm({
  onSubmit,
}: CommunityApplicationFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<CommunityApplicationData>({
    fullName: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    occupation: "",
    interest: "",
    consent: false,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof CommunityApplicationData, string>>
  >({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =========================================================
     INPUT HANDLER
  ========================================================= */

  const handleChange = (
    field: keyof CommunityApplicationData,
    value: string | boolean,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateForm = () => {
    const newErrors: Partial<Record<keyof CommunityApplicationData, string>> =
      {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Please select your date of birth.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Please enter your address.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    if (!formData.state) {
      newErrors.state = "Please select your state or union territory.";
    }

    if (!formData.pinCode.trim()) {
      newErrors.pinCode = "Please enter your PIN code.";
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = "Please enter a valid 6-digit PIN code.";
    }

    if (!formData.occupation.trim()) {
      newErrors.occupation = "Please enter your occupation.";
    }

    if (!formData.interest.trim()) {
      newErrors.interest = "Please tell us why you want to join.";
    }

    if (!formData.consent) {
      newErrors.consent = "Please confirm the information provided.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      /*
        TEMPORARY FLOW

        Later this will become:

        POST /api/community/applications

        For now we move the user to the
        Application Submitted / Review page.
      */

      if (onSubmit) {
        onSubmit(formData);
      }

      await new Promise((resolve) => setTimeout(resolve, 700));

      router.push("/join-us/status");
    } catch (error) {
      console.error("Application submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-[#E4DDCF]
        bg-white
        shadow-[0_15px_45px_rgba(6,59,32,0.08)]
      "
    >
      {/* =====================================================
          TRICOLOR TOP ACCENT
      ====================================================== */}

      <div className="flex h-1.5">
        <div className="w-1/3 bg-[#FF9933]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138808]" />
      </div>

      <div className="p-5 sm:p-8 lg:p-10">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mb-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#FF9933]" />

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#D98A18]
                sm:text-xs
              "
            >
              Step 1 · Application
            </p>

            <span className="h-px w-7 bg-[#138808]" />
          </div>

          <h1
            className="
              mt-4
              text-2xl
              font-black
              leading-tight
              text-[#063B20]
              sm:text-3xl
            "
          >
            Community Member Application
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-6
              text-slate-500
              sm:text-base
            "
          >
            Tell us a little about yourself and why you would like to become
            part of the Dishaa Community.
          </p>
        </div>

        {/* ===================================================
            PERSONAL INFORMATION
        ==================================================== */}

        <FormSection
          number="01"
          title="Personal Information"
          description="Please provide your basic details."
        >
          <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
            <FormInput
              label="Full Name"
              required
              placeholder="Enter your full name"
              value={formData.fullName}
              error={errors.fullName}
              onChange={(value) => handleChange("fullName", value)}
            />

            <FormInput
              label="Email Address"
              required
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              error={errors.email}
              onChange={(value) => handleChange("email", value)}
            />

            <FormInput
              label="Mobile Number"
              required
              type="tel"
              placeholder="10-digit mobile number"
              value={formData.mobile}
              error={errors.mobile}
              maxLength={10}
              onChange={(value) =>
                handleChange("mobile", value.replace(/\D/g, ""))
              }
            />

            <FormInput
              label="Date of Birth"
              required
              type="date"
              value={formData.dateOfBirth}
              error={errors.dateOfBirth}
              onChange={(value) => handleChange("dateOfBirth", value)}
            />

            {/* GENDER */}

            <div>
              <label
                className="
                  mb-2
                  block
                  text-xs
                  font-bold
                  text-[#063B20]
                "
              >
                Gender
                <span className="ml-1 text-[#FF9933]">*</span>
              </label>

              <GenderSelect
                value={formData.gender}
                onChange={(value) => handleChange("gender", value)}
              />

              {errors.gender && (
                <p className="mt-1.5 text-xs text-red-500">{errors.gender}</p>
              )}
            </div>

            <FormInput
              label="Occupation"
              required
              placeholder="Student, Teacher, Business, etc."
              value={formData.occupation}
              error={errors.occupation}
              onChange={(value) => handleChange("occupation", value)}
            />
          </div>
        </FormSection>

        {/* ===================================================
            ADDRESS
        ==================================================== */}

        <FormSection
          number="02"
          title="Address"
          description="Tell us where you are based."
        >
          <div className="space-y-5">
            <FormTextarea
              label="Address"
              required
              placeholder="Enter your full address"
              value={formData.address}
              error={errors.address}
              onChange={(value) => handleChange("address", value)}
            />

            <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
              <FormInput
                label="City"
                required
                placeholder="Enter your city"
                value={formData.city}
                error={errors.city}
                onChange={(value) => handleChange("city", value)}
              />

              {/* STATE */}

              <div>
                <label
                  className="
                    mb-2
                    block
                    text-xs
                    font-bold
                    text-[#063B20]
                  "
                >
                  State / Union Territory
                  <span className="ml-1 text-[#FF9933]">*</span>
                </label>

                <IndianStateSelect
                  value={formData.state}
                  onChange={(value) => handleChange("state", value)}
                  error={!!errors.state}
                />

                {errors.state && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.state}</p>
                )}
              </div>

              <FormInput
                label="PIN Code"
                required
                placeholder="6-digit PIN code"
                value={formData.pinCode}
                error={errors.pinCode}
                maxLength={6}
                onChange={(value) =>
                  handleChange("pinCode", value.replace(/\D/g, ""))
                }
              />
            </div>
          </div>
        </FormSection>

        {/* ===================================================
            INTEREST
        ==================================================== */}

        <FormSection
          number="03"
          title="About Your Interest"
          description="Help us understand your motivation for joining."
        >
          <FormTextarea
            label="Why would you like to join our community?"
            required
            placeholder="Tell us a little about your interest in Dishaa Community..."
            value={formData.interest}
            error={errors.interest}
            rows={5}
            onChange={(value) => handleChange("interest", value)}
          />
        </FormSection>

        {/* ===================================================
            CONSENT
        ==================================================== */}

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-[#E4DDCF]
            bg-[#FCFBF7]
            p-4
          "
        >
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(event) =>
                handleChange("consent", event.target.checked)
              }
              className="
                mt-1
                h-4
                w-4
                shrink-0
                accent-[#138808]
              "
            />

            <span
              className="
                text-xs
                leading-5
                text-slate-500
              "
            >
              I confirm that the information provided by me is accurate and I
              agree to the Dishaa Community membership terms and conditions.
            </span>
          </label>

          {errors.consent && (
            <p
              className="
                mt-2
                pl-7
                text-xs
                font-medium
                text-red-500
              "
            >
              {errors.consent}
            </p>
          )}
        </div>

        {/* ===================================================
            SUBMIT
        ==================================================== */}

        <div
          className="
            mt-8
            border-t
            border-[#E8E2D7]
            pt-6
          "
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              px-6
              text-sm
              font-bold
              text-white
              transition-all
              duration-300
              sm:w-auto

              ${
                isSubmitting
                  ? `
                    cursor-not-allowed
                    bg-slate-400
                  `
                  : `
                    bg-[#FF9933]
                    shadow-[0_10px_25px_rgba(255,153,51,0.20)]
                    hover:-translate-y-0.5
                    hover:bg-[#E88921]
                    hover:shadow-[0_14px_30px_rgba(255,153,51,0.28)]
                  `
              }
            `}
          >
            {isSubmitting ? (
              <>
                <span
                  className="
                    h-4
                    w-4
                    animate-spin
                    rounded-full
                    border-2
                    border-white/30
                    border-t-white
                  "
                />
                Submitting Application...
              </>
            ) : (
              <>
                Submit Application
                <span className="text-base text-white">→</span>
              </>
            )}
          </button>

          <p
            className="
              mt-3
              text-xs
              leading-5
              text-slate-400
            "
          >
            Your application will be reviewed by the Dishaa team before payment
            is requested.
          </p>
        </div>
      </div>
    </form>
  );
}

/* =========================================================
   FORM SECTION
========================================================= */

function FormSection({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className="
        border-t
        border-[#E8E2D7]
        pt-7
        first:border-t-0
        first:pt-0
      "
    >
      <div className="mb-5 flex items-start gap-3">
        <span
          className="
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#138808]
            text-[10px]
            font-bold
            text-white
            shadow-sm
          "
        >
          {number}
        </span>

        <div>
          <h2
            className="
              text-base
              font-black
              text-[#063B20]
              sm:text-lg
            "
          >
            {title}
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">{description}</p>
        </div>
      </div>

      {children}
    </section>
  );
}

/* =========================================================
   INPUT
========================================================= */

function FormInput({
  label,
  required = false,
  type = "text",
  placeholder,
  value,
  error,
  maxLength,
  onChange,
}: {
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  maxLength?: number;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-xs
          font-bold
          text-[#063B20]
        "
      >
        {label}

        {required && <span className="ml-1 text-[#FF9933]">*</span>}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(event) => onChange(event.target.value)}
        className={`
          h-12
          w-full
          rounded-xl
          border
          bg-white
          px-4
          text-sm
          text-slate-700
          outline-none
          transition-all
          placeholder:text-slate-300

          focus:border-[#138808]
          focus:ring-4
          focus:ring-[#138808]/10

          ${
            error ? "border-red-400" : "border-[#E0D8C9] hover:border-[#CDBFA9]"
          }
        `}
      />

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

/* =========================================================
   SELECT
========================================================= */

function FormSelect({
  label,
  required = false,
  value,
  error,
  placeholder,
  options,
  onChange,
}: {
  label: string;
  required?: boolean;
  value: string;
  error?: string;
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-xs
          font-bold
          text-[#063B20]
        "
      >
        {label}

        {required && <span className="ml-1 text-[#FF9933]">*</span>}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`
            h-12
            w-full
            appearance-none
            rounded-xl
            border
            bg-white
            px-4
            pr-10
            text-sm
            outline-none
            transition-all

            focus:border-[#138808]
            focus:ring-4
            focus:ring-[#138808]/10

            ${value ? "text-slate-700" : "text-slate-400"}

            ${
              error
                ? "border-red-400"
                : "border-[#E0D8C9] hover:border-[#CDBFA9]"
            }
          `}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="
            pointer-events-none
            absolute
            right-4
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            text-slate-400
          "
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

/* =========================================================
   TEXTAREA
========================================================= */

function FormTextarea({
  label,
  required = false,
  placeholder,
  value,
  error,
  rows = 4,
  onChange,
}: {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  error?: string;
  rows?: number;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-xs
          font-bold
          text-[#063B20]
        "
      >
        {label}

        {required && <span className="ml-1 text-[#FF9933]">*</span>}
      </label>

      <textarea
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={`
          min-h-28
          w-full
          resize-y
          rounded-xl
          border
          bg-white
          px-4
          py-3
          text-sm
          leading-6
          text-slate-700
          outline-none
          transition-all
          placeholder:text-slate-300

          focus:border-[#138808]
          focus:ring-4
          focus:ring-[#138808]/10

          ${
            error ? "border-red-400" : "border-[#E0D8C9] hover:border-[#CDBFA9]"
          }
        `}
      />

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
