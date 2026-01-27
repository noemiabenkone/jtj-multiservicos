import { WHATSAPP_LINK } from "../utils/whatsapp";

interface Props {
  label: string;
  className?: string;
}

export default function WhatsAppButton({ label, className }: Props) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        bg-green-600 hover:bg-green-500
        text-white px-6 py-3
        rounded-lg font-semibold
        transition inline-flex items-center gap-2
        ${className ?? ""}
      `}
    >
      {label}
    </a>
  );
}
