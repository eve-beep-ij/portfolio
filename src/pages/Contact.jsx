import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xyeeejad");

  if (state.succeeded) {
    return (
      <section className="content-section">
        <h1>Contact</h1>
        <p className="success">Message sent. Thank you!</p>
      </section>
    );
  }

  return (
    <section className="content-section">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <ValidationError field="email" prefix="Email" errors={state.errors} />

        <label>
          Message
          <textarea name="message" rows="5" required />
        </label>
        <ValidationError field="message" prefix="Message" errors={state.errors} />

        <button
          className="btn btn-primary"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send message"}
        </button>
      </form>
    </section>
  );
}