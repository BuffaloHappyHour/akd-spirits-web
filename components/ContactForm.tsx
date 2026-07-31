"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-gold-dim bg-bg-panel-raised p-8">
        <p className="font-display text-xl text-cream">Message sent.</p>
        <p className="mt-2 text-sm text-cream-dim">
          Thanks for reaching out &mdash; we&rsquo;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Subject" name="subject" type="text" />
      <div>
        <label htmlFor="message" className="eyebrow mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-sm border border-line bg-bg-panel px-4 py-3 text-sm text-cream placeholder:text-cream-faint focus-visible:border-gold-bright"
          placeholder="What's on your mind?"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-gold-bright">
          Something went wrong sending your message. Please try again or
          email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-sm border border-gold bg-gold px-6 py-3 text-sm font-medium tracking-wide text-bg transition-colors hover:bg-gold-bright hover:border-gold-bright disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-line bg-bg-panel px-4 py-3 text-sm text-cream placeholder:text-cream-faint focus-visible:border-gold-bright"
      />
    </div>
  );
}
