import { useState } from "react";
import { CONTACT } from "../constants"
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ email: "", subject: "", body: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT.email}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            email: form.email,
            subject: form.subject,
            message: form.body,
            _subject: `Portfolio contact: ${form.subject}`,
            _replyto: form.email,
            _template: "table",
          }),
        },
      );

      if (!response.ok) throw new Error("The email service could not send your message.");

      setForm({ email: "", subject: "", body: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className='border-b border-neutral-900 pb-16 pt-8'>
      <motion.h1 
       whileInView={{ opacity: 1, y: 0}}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 1}}
      className='my-10 text-center text-3xl font-bold lg:text-4xl'>Get in Touch</motion.h1>
      <div className='text-center tracking tighter'>
        <motion.p 
         whileInView={{ opacity: 1, x: 0}}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 1}}
        className='my-4'>{CONTACT.address}</motion.p>
        <motion.p 
         whileInView={{ opacity: 1, x: 0}}
         initial={{ opacity: 0, x: 200 }}
         transition={{ duration: 1}}
        className='my-4'>{CONTACT.phoneNo}</motion.p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">{CONTACT.email}</a>
      </div>
      <form
        className="mx-auto mt-10 flex max-w-xl flex-col gap-4 px-4 text-left"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-2">
          <span>Your email</span>
          <input
            className="rounded border border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-indigo-400"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Subject</span>
          <input
            className="rounded border border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-indigo-400"
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Message</span>
          <textarea
            className="min-h-32 rounded border border-neutral-700 bg-transparent px-3 py-2 outline-none focus:border-indigo-400"
            name="body"
            value={form.body}
            onChange={handleChange}
            required
          />
        </label>
        <button
          className="rounded bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        {status === "success" && (
          <p className="text-sm text-green-400" role="status">Message sent — thank you!</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400" role="alert">
            We couldn&apos;t send your message. Please try again or email me directly.
          </p>
        )}
      </form>
    </div>
  )
}

export default Contact
