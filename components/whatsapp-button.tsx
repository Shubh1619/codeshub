const WHATSAPP_URL =
  "https://wa.me/917841951305?text=Hi%20Codeshub%2C%20I%27d%20like%20to%20talk%20about%20a%20project.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Codeshub on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_36px_-12px_rgba(37,211,102,0.7)] transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]"
      />
      <WhatsAppIcon width={26} height={26} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] px-3 py-1.5 text-sm font-medium text-[var(--text)] shadow-sm transition-opacity group-hover:opacity-100 md:block">
        Chat with us
      </span>
    </a>
  );
}

function WhatsAppIcon({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.65.865 5.109 2.325 7.115L4.35 28l6.02-1.94a11.94 11.94 0 0 0 5.634 1.425h.005C22.625 27.485 28 22.102 28 15.481 28 8.86 22.625 3 16.004 3zm0 22.313h-.004a9.92 9.92 0 0 1-5.05-1.383l-.36-.214-3.573 1.152 1.15-3.484-.234-.374a9.87 9.87 0 0 1-1.512-5.25c0-5.469 4.452-9.921 9.926-9.921a9.87 9.87 0 0 1 9.92 9.921c0 5.474-4.45 9.553-9.263 9.553z" />
      <path d="M21.3 17.27c-.29-.145-1.72-.85-1.986-.947-.266-.097-.46-.145-.654.145-.194.29-.75.947-.92 1.14-.17.194-.339.218-.629.073-.29-.146-1.225-.452-2.333-1.44-.863-.77-1.446-1.72-1.615-2.011-.17-.29-.018-.447.128-.591.13-.13.29-.34.436-.51.145-.17.194-.29.29-.485.097-.194.048-.363-.024-.509-.073-.145-.655-1.575-.898-2.157-.236-.566-.476-.49-.654-.5l-.557-.009c-.194 0-.508.073-.774.36s-1.016.993-1.016 2.423 1.04 2.811 1.185 3.005c.145.194 2.047 3.125 4.959 4.381.693.3 1.234.478 1.655.611.696.221 1.329.19 1.83.115.559-.084 1.72-.703 1.962-1.382.242-.678.242-1.259.17-1.382-.073-.121-.267-.193-.557-.338z" />
    </svg>
  );
}