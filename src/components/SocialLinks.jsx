import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socials = [
  { label: "X", href: "https://x.com/@Ijeomaeve1", Icon: FaXTwitter, color: "currentColor" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ijeoma-eve-69801021a", Icon: FaLinkedin, color: "#0A66C2" },
  { label: "GitHub", href: "https://github.com/eve-beep-ij", Icon: FaGithub, color: "currentColor" },
  { label: "Email", href: "mailto:ijayeve24@gmail.com", Icon: MdEmail, color: "#EA4335" },
];

export default function SocialLinks() {
  return (
    <div className="socials">
      {socials.map(({ label, href, Icon, color }) => (
        <a
          key={label}
          href={href}
          className="social-link"
          aria-label={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          style={{ color }}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
