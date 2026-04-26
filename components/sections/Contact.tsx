"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/utils/constants";
import FadeIn from "../animations/FadeIn";
import { HiOutlineMail } from "react-icons/hi";
import { LuMapPinned } from "react-icons/lu";
import { BiSolidPaperPlane } from "react-icons/bi";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Status = {
  type: "success" | "error" | "";
  message: string;
};

const socialLinks = [
  { icon: FaGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: SOCIAL_LINKS.twitter, label: "X / Twitter" },
];

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>({ type: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setStatus({ type: "success", message: "Message sent successfully!" });
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus({ type: "", message: "" }), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/20 absolute top-1/4 left-1/4 size-96 rounded-full opacity-30 blur-3xl" />
        <div className="bg-primary/20 absolute right-1/4 bottom-1/4 size-96 rounded-full opacity-30 blur-3xl" />
        <div className="bg-primary/10 absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="mb-16 text-center">
            <div className="bg-primary/10 border-primary/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <HiOutlineChatBubbleLeftRight className="text-primary size-4" />
              <span className="text-primary text-sm font-medium tracking-wider">
                Get In Touch
              </span>
            </div>

            <h2 className="mb-4 font-normal text-white">
              Let&apos;s Work Together
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Have an AI project in mind? Let&apos;s discuss how we can build
              it.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <FadeIn delay={100}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    className="focus:border-primary/50 focus:ring-primary/50 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all duration-300 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="focus:border-primary/50 focus:ring-primary/50 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all duration-300 focus:ring-2 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="focus:border-primary/50 focus:ring-primary/50 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all duration-300 focus:ring-2 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="from-primary/10 to-primary hover:shadow-primary/30 group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r px-6 py-3 font-medium text-white transition-all duration-300 hover:opacity-90 hover:shadow-2xl"
                >
                  <span>Send Message</span>
                  <BiSolidPaperPlane className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {status.message && (
                  <div
                    role="alert"
                    className={`rounded-xl p-4 text-sm ${
                      status.type === "success"
                        ? "border border-green-500/30 bg-green-500/10 text-green-400"
                        : "border border-red-500/30 bg-red-500/10 text-red-400"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-2xl tracking-wide text-white">
                  Let&apos;s Connect
                </h3>
                <p className="leading-relaxed text-white/60">
                  I&apos;m always open to discussing new AI/ML projects,
                  research collaborations, or data engineering challenges.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div className="group hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="from-primary/20 to-primary/20 border-primary/30 rounded-xl border bg-linear-to-br p-3">
                      <HiOutlineMail className="text-primary size-6" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm text-white/60">Email</p>
                      <Link
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="font-medium text-white transition-colors hover:text-[#A8FF8D]"
                      >
                        {PERSONAL_INFO.email}
                      </Link>
                    </div>
                  </div>
                  <div className="from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br transition-all duration-300" />
                </div>

                {/* Location */}
                <div className="group hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="from-primary/20 to-primary/20 border-primary/30 rounded-xl border bg-linear-to-br p-3">
                      <LuMapPinned className="text-primary size-6" />
                    </div>
                    <div className="flex-1">
                      <p className="mb-1 text-sm text-white/60">Location</p>
                      <p className="font-medium text-white">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>
                  <div className="from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br transition-all duration-300" />
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="mb-4 text-sm text-white/60">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="hover:border-primary/50 group rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:scale-110 hover:bg-white/10"
                      >
                        <Icon className="group-hover:text-primary size-6 text-white/60 transition-colors" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
