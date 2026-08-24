'use client'

import Link from 'next/link'
import { Mail, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    setIsSending(true)
    setStatus(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append(
      'access_key',
      '914c2026-eeef-4933-a9fe-583ced5074a6'
    )

    formData.append(
      'subject',
      'New Project Inquiry — NAVA FARHADI'
    )

    formData.append(
      'from_name',
      'NAVA FARHADI Website'
    )

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F0E8] text-[#405044]">

      {/* =========================
          Hero
      ========================== */}
      <section className="px-8 pb-24 pt-40 md:px-16 md:pb-32 md:pt-48 lg:px-[8vw]">
        <div className="mx-auto max-w-[1300px]">

          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

            {/* Heading */}
            <div>
              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#405044]/50
                "
              >
                Contact
              </span>

              <h1
                className="
                  mt-6
                  max-w-[800px]
                  font-serif
                  text-6xl
                  font-normal
                  leading-[0.9]
                  md:text-7xl
                  lg:text-[8vw]
                "
              >
                Let&apos;s create
                <br />
                something
                <br />
                beautiful.
              </h1>
            </div>

            {/* Intro */}
            <div className="max-w-[380px] lg:pb-3">

              <p
                className="
                  text-sm
                  leading-7
                  text-[#405044]/70
                "
              >
                For new projects, collaborations, and creative inquiries,
                we&apos;d love to hear from you.
              </p>

              <a
                href="mailto:hello@navafarhadi.com"
                className="
                  mt-8
                  inline-block
                  border-b
                  border-[#405044]/30
                  pb-2
                  text-sm
                  tracking-[0.08em]
                  transition-opacity
                  hover:opacity-50
                "
              >
                hello@navafarhadi.com
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* =========================
          Contact Details + Form
      ========================== */}
      <section className="px-8 pb-32 md:px-16 lg:px-[8vw] lg:pb-40">
        <div className="mx-auto max-w-[1300px]">

          <div
            className="
              grid
              gap-20
              border-t
              border-[#405044]/15
              pt-16
              lg:grid-cols-[0.7fr_1.3fr]
            "
          >

            {/* =========================
                Connect
            ========================== */}
            <div>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#405044]/45
                "
              >
                Connect
              </span>

              <div className="mt-8 flex flex-col items-start gap-5">

                {/* Instagram */}
                <Link
                  href="#"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-[#405044]
                    transition-opacity
                    hover:opacity-60
                  "
                >

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                    />

                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />

                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>

                  <span>Instagram</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </Link>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/tannaz-samiyan-69a884395/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-[#405044]
                    transition-opacity
                    hover:opacity-60
                  "
                >

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.5 8.5H3.5V20h3V8.5ZM5 3.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM21 13.5c0-3.2-1.7-5-4.2-5-1.9 0-2.8 1-3.3 1.7V8.5h-3V20h3v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V20h3v-6.5Z" />
                  </svg>

                  <span>LinkedIn</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </a>

                {/* Email */}
                <a
                  href="mailto:hello@navafarhadi.com"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    text-sm
                    text-[#405044]
                    transition-opacity
                    hover:opacity-60
                  "
                >

                  <Mail
                    size={16}
                    strokeWidth={1.5}
                  />

                  <span>Email</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </a>

              </div>
            </div>

            {/* =========================
                Contact Form
            ========================== */}
            <form
              onSubmit={handleSubmit}
              className="space-y-10"
            >

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#405044]/50
                  "
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="
                    mt-3
                    w-full
                    border-0
                    border-b
                    border-[#405044]/20
                    bg-transparent
                    px-0
                    py-3
                    text-base
                    outline-none
                    transition-colors
                    placeholder:text-[#405044]/30
                    focus:border-[#405044]/60
                  "
                />

              </div>

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#405044]/50
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="
                    mt-3
                    w-full
                    border-0
                    border-b
                    border-[#405044]/20
                    bg-transparent
                    px-0
                    py-3
                    text-base
                    outline-none
                    transition-colors
                    placeholder:text-[#405044]/30
                    focus:border-[#405044]/60
                  "
                />

              </div>

              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#405044]/50
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project"
                  className="
                    mt-3
                    w-full
                    resize-none
                    border-0
                    border-b
                    border-[#405044]/20
                    bg-transparent
                    px-0
                    py-3
                    text-base
                    outline-none
                    transition-colors
                    placeholder:text-[#405044]/30
                    focus:border-[#405044]/60
                  "
                />

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  pt-4
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  transition-opacity
                  duration-300
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >

                <span>
                  {isSending ? 'Sending...' : 'Send Message'}
                </span>

                {/* Arrow */}
                {!isSending && (
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                )}

                {/* Loading dots */}
                {isSending && (
                  <span className="flex items-center gap-1">

                    <span
                      className="
                        h-1
                        w-1
                        animate-pulse
                        rounded-full
                        bg-[#405044]
                      "
                    />

                    <span
                      className="
                        h-1
                        w-1
                        animate-pulse
                        rounded-full
                        bg-[#405044]
                      "
                      style={{
                        animationDelay: '150ms',
                      }}
                    />

                    <span
                      className="
                        h-1
                        w-1
                        animate-pulse
                        rounded-full
                        bg-[#405044]
                      "
                      style={{
                        animationDelay: '300ms',
                      }}
                    />

                  </span>
                )}

              </button>

              {/* =========================
                  Success Message
              ========================== */}
              {status === 'success' && (
                <p
                  className="
                    mt-6
                    border-l
                    border-[#405044]/30
                    pl-4
                    text-sm
                    leading-6
                    text-[#405044]/65
                  "
                >
                  Thank you for reaching out.
                  <br />
                  We&apos;ll be in touch soon.
                </p>
              )}

              {/* =========================
                  Error Message
              ========================== */}
              {status === 'error' && (
                <p
                  className="
                    mt-6
                    border-l
                    border-[#405044]/30
                    pl-4
                    text-sm
                    leading-6
                    text-[#405044]/65
                  "
                >
                  Something went wrong.
                  <br />
                  Please try again.
                </p>
              )}

            </form>

          </div>
        </div>
      </section>

    </main>
  )
}