import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiClock,
  FiCode,
  FiExternalLink,
  FiFileText,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import { profile } from "../data/portfolioData";
import SectionHeading from "./SectionHeading.jsx";

const initialForm = { name: "", email: "", message: "" };

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

function getErrors(form, showAll = false, touched = {}) {
  return {
    name:
      (showAll || touched.name) && !form.name.trim() ? "Name is required" : "",
    email:
      (showAll || touched.email) && !/^\S+@\S+\.\S+$/.test(form.email)
        ? "Enter a valid email"
        : "",
    message:
      (showAll || touched.message) && form.message.trim().length < 10
        ? "Message must be at least 10 characters"
        : "",
  };
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);

  const errors = getErrors(form, false, touched);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    const validationErrors = getErrors(form, true, allTouched);
    setTouched(allTouched);

    if (Object.values(validationErrors).some(Boolean)) {
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields before sending.",
      });
      return;
    }

    if (
      !emailJsConfig.serviceId ||
      !emailJsConfig.templateId ||
      !emailJsConfig.publicKey
    ) {
      setStatus({
        type: "error",
        message:
          "EmailJS is not configured yet. Add your Service ID, Template ID, and Public Key.",
      });
      return;
    }

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          to_email: "soubhagyakb121@gmail.com",
        },
        emailJsConfig.publicKey,
      );

      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setForm(initialForm);
      setTouched({});
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong while sending. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-shell !pb-12 !pt-[4.5rem] lg:!pb-14 lg:!pt-[5.5rem]"
    >
      <SectionHeading eyebrow="Contact" title="Let's Connect">
        Open to internships, Java full-stack opportunities, collaborations, and
        meaningful development conversations.
      </SectionHeading>

      <div className="grid items-stretch gap-7 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="premium-border glass-card flex h-full flex-col rounded-3xl p-6 sm:p-7"
        >
          <h3 className="text-2xl font-bold">Contact Details</h3>

          <div className="mt-5 space-y-5">
            <ContactRow icon={FiMail} label="Email">
              <a
                href={`mailto:${profile.email}`}
                className="break-all font-semibold text-slate-100 transition hover:text-cyanGlow"
              >
                {profile.email}
              </a>
            </ContactRow>

            <ContactRow icon={FiMapPin} label="Location" violet>
              <p className="font-semibold">{profile.location}</p>
            </ContactRow>

            <ContactRow icon={FiCode} label="Profiles" neutral>
              <div className="mt-1 flex gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-100 transition hover:text-cyanGlow"
                >
                  GitHub
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-slate-100 transition hover:text-cyanGlow"
                >
                  LinkedIn
                </a>
              </div>
            </ContactRow>
          </div>

          <div className="mt-6 rounded-3xl border border-cyanGlow/15 bg-cyanGlow/[0.055] p-4 shadow-cyan backdrop-blur-xl">
            <div className="flex gap-3">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-violetGlow/10 text-cyanGlow">
                <FiCheckCircle />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  Availability Status
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Open to Java Full Stack, Backend Development, and Internship
                  opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyanGlow/35 hover:bg-cyanGlow/10 hover:text-cyanGlow"
            >
              <FiFileText /> Resume PDF <FiExternalLink className="text-xs" />
            </a>

            <div className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-medium text-slate-400">
              <FiClock className="text-cyanGlow/80" />
              Usually responds within 24 hours
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          onSubmit={handleSubmit}
          transition={{ duration: 0.55 }}
          className="premium-border glass-card rounded-3xl p-6 sm:p-7"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Name"
              placeholder="Your name"
              name="name"
              autoComplete="name"
              value={form.name}
              error={errors.name}
              onBlur={() =>
                setTouched((current) => ({ ...current, name: true }))
              }
              onChange={handleChange}
            />
            <Field
              label="Email"
              placeholder="your@email.com"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              error={errors.email}
              onBlur={() =>
                setTouched((current) => ({ ...current, email: true }))
              }
              onChange={handleChange}
            />
          </div>
          <Field
            label="Message"
            placeholder="Your message..."
            name="message"
            value={form.message}
            error={errors.message}
            onBlur={() =>
              setTouched((current) => ({ ...current, message: true }))
            }
            onChange={handleChange}
            textarea
          />

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              className="glow-button w-full disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
              type="submit"
              disabled={isSending}
            >
              <FiSend /> {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                aria-live="polite"
                className={`rounded-2xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                    : "border-rose-400/20 bg-rose-400/10 text-rose-200"
                }`}
              >
                {status.message}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
  violet = false,
  neutral = false,
}) {
  const Icon = icon;
  const iconClass = neutral
    ? "bg-white/5 text-cyanGlow"
    : violet
      ? "bg-violetGlow/10 text-violet-200 shadow-glow"
      : "bg-cyanGlow/10 text-cyanGlow shadow-cyan";

  return (
    <div className="flex items-center gap-4">
      <span
        className={`grid h-12 w-12 place-items-center rounded-2xl ${iconClass}`}
      >
        <Icon />
      </span>

      <div>
        <p className="text-sm text-slate-400">{label}</p>
        {children}
      </div>
    </div>
  );
}

function Field({ label, error, textarea = false, name, ...props }) {
  const fieldId = `contact-${name}`;
  const errorId = `${fieldId}-error`;
  const baseClass =
    "mt-2 w-full rounded-2xl border bg-white/[0.065] px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 hover:border-white/20 focus:-translate-y-0.5 focus:border-cyanGlow focus:bg-white/[0.085] focus:shadow-cyan focus:ring-4 focus:ring-cyanGlow/10";

  return (
    <label className={`block ${textarea ? "mt-5" : ""}`} htmlFor={fieldId}>
      <span className="text-sm font-semibold text-slate-200">{label}</span>
      {textarea ? (
        <textarea
          id={fieldId}
          name={name}
          rows="6"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${baseClass} ${error ? "border-rose-400/70" : "border-white/10"}`}
          {...props}
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${baseClass} ${error ? "border-rose-400/70" : "border-white/10"}`}
          {...props}
        />
      )}
      <span id={errorId} className="mt-1.5 block min-h-4 text-xs text-rose-300">
        {error}
      </span>
    </label>
  );
}

export default Contact;
