import { useState, type FormEvent } from 'react'
import { Check, Copy, Mail, MessageCircle } from 'lucide-react'
import { EMAIL, WHATSAPP } from '../../data/contact'
import { Reveal } from '../effects/Reveal'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Name is required'
  if (!values.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email'
  if (!values.message.trim()) errors.message = 'Message is required'
  else if (values.message.trim().length < 10) errors.message = 'Please write a bit more detail'
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [copied, setCopied] = useState(false)
  const [submittedHint, setSubmittedHint] = useState('')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL.display)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setSubmittedHint('')
      return
    }

    const subject = encodeURIComponent(`Portfolio contact from ${values.name}`)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
    )
    window.location.href = `${EMAIL.href}?subject=${subject}&body=${body}`
    setSubmittedHint('Opening your email client to send the message…')
  }

  return (
    <section id="contact" className="section-pad relative py-20 md:py-28">
      <div className="container-max grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.22em] text-cyan uppercase">Contact</p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-tight">
            Have an Idea?
            <br />
            <span className="text-gradient">Let&apos;s Build Something.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Reach out by email or WhatsApp. The form opens your mail client with your message ready
            to send.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={EMAIL.href} variant="primary" magnetic>
              <Mail className="h-4 w-4" /> Send an Email
            </Button>
            <Button href={WHATSAPP.href} variant="secondary">
              <MessageCircle className="h-4 w-4" /> Contact on WhatsApp
            </Button>
            <Button type="button" variant="ghost" onClick={copyEmail}>
              {copied ? <Check className="h-4 w-4 text-cyan" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy Email'}
            </Button>
          </div>

          <div className="mt-6 space-y-2 text-sm text-muted">
            <p>
              Email:{' '}
              <a className="text-cyan hover:underline" href={EMAIL.href}>
                {EMAIL.display}
              </a>
            </p>
            <p>
              WhatsApp:{' '}
              <a className="text-cyan hover:underline" href={WHATSAPP.href}>
                {WHATSAPP.display}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="glass rounded-3xl p-6 md:p-8" onSubmit={onSubmit} noValidate>
            <div className="space-y-4">
              <Field
                label="Name"
                id="name"
                error={errors.name}
                value={values.name}
                onChange={(v) => setValues((s) => ({ ...s, name: v }))}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                error={errors.email}
                value={values.email}
                onChange={(v) => setValues((s) => ({ ...s, email: v }))}
              />
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-white/90">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
                  className={cn(
                    'w-full resize-y rounded-xl border bg-bg/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan/50',
                    errors.message ? 'border-red-400/60' : 'border-electric/20',
                  )}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-300">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <Button type="submit" variant="primary" className="mt-6 w-full sm:w-auto">
              Send Message
            </Button>
            {submittedHint && <p className="mt-3 text-xs text-muted">{submittedHint}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = 'text',
}: {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  error?: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm text-white/90">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'w-full rounded-xl border bg-bg/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan/50',
          error ? 'border-red-400/60' : 'border-electric/20',
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}
