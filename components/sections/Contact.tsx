"use client";

import { useState } from "react";
import {
  HiEnvelope,
  HiMapPin,
  HiPaperAirplane,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaDribbble,
} from "react-icons/fa6";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/utils/constants";
import FadeIn from "../animations/FadeIn";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Status = {
  type: "success" | "error" | "";
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email" });
      return;
    }

    // simulate success
    setStatus({
      type: "success",
      message: "Message sent successfully!",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 4000);
  };

  const socialIcons = [
    {
      icon: FaGithub,
      href: SOCIAL_LINKS.github,
    },
    {
      icon: FaLinkedinIn,
      href: SOCIAL_LINKS.linkedin,
    },
    {
      icon: FaXTwitter,
      href: SOCIAL_LINKS.twitter,
    },
    {
      icon: FaDribbble,
      href: SOCIAL_LINKS.dribbble,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-primary/20 absolute top-1/4 left-1/4 size-96 rounded-full opacity-30 blur-3xl"></div>
        <div className="bg-primary/20 absolute right-1/4 bottom-1/4 size-96 rounded-full opacity-30 blur-3xl"></div>
        <div className="bg-primary/10 absolute top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="mb-16 text-center">
            <div className="bg-primary/10 border-primary/30 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2">
              <HiOutlineChatBubbleLeftRight className="text-primary h-4 w-4" />
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Get In Touch
              </span>
            </div>

            <h2 className="mb-4 text-4xl font-normal text-white lg:text-5xl">
              Let's Work Together
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-white/60">
              Have a project in mind? Let’s discuss how we can build it.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2">
          {/* FORM */}
          <FadeIn delay={100}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="focus:border-primary/50 focus:ring-primary/50 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all duration-300 focus:ring-2 focus:outline-none"
                    placeholder="Your name"
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
                    className="focus:border-primary/50 focus:ring-primary/50 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all duration-300 focus:ring-2 focus:outline-none"
                    placeholder="your@email.com"
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
                    className="focus:border-primary/50 focus:ring-primary/50 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition-all duration-300 focus:ring-2 focus:outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="from-primary/10 to-primary hover:shadow-primary/30 group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r px-6 py-3 font-medium text-white transition-all duration-300 hover:opacity-90 hover:shadow-2xl"
                >
                  <span>Send Message</span>
                  <HiPaperAirplane className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {/* STATUS */}
                {status.message && (
                  <div
                    className={`rounded-xl p-4 ${
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
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Let's Connect
                </h3>
                <p className="leading-relaxed text-white/60">
                  I'm always open to discussing new projects.
                </p>
              </div>

              <div className="space-y-4">
                <div className="group hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="from-primary/20 to-primary/20 border-primary/30 rounded-xl border bg-linear-to-br p-3">
                      <HiEnvelope className="text-primary size-6" />
                    </div>

                    <div className="flex-1">
                      <p className="mb-1 text-sm text-white/60">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="font-medium text-white transition-colors hover:text-[#A8FF8D]"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <div className="from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br transition-all duration-300" />
                </div>

                {/* Location */}
                <div className="group hover:border-primary/30 relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="from-primary/20 to-primary/20 border-primary/30 rounded-xl border bg-linear-to-br p-3">
                      <HiMapPin className="text-primary size-6" />
                    </div>

                    <div className="flex-1">
                      <p className="text:sm mb-1 text-white/60">Location</p>
                      <p className="font-medium text-white transition-colors hover:text-[#A8FF8D]">
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
                  {socialIcons.slice(0, 3).map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:border-primary/50 group rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:scale-110 hover:bg-white/10"
                      >
                        <Icon className="group-hover:text-primary size-6 text-white/60 transition-colors" />
                      </a>
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
