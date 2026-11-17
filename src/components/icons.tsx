import type React from "react";
import type { ServiceIcon as ServiceIconName } from "../data/services";

const paths: Record<ServiceIconName, React.ReactNode> = {
  voucher: (
    <>
      <rect x="2.6" y="5.4" width="18.8" height="13.2" rx="2.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.6 9.6h18.8" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6.2 14.2h4.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M16.4 7.5v1.4M16.4 12.4v1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  phone: (
    <>
      <rect x="6.6" y="2.4" width="10.8" height="19.2" rx="2.4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10.4 5.2h3.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M9.4 12.4h5.2M9.4 16h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </>
  ),
  card: (
    <>
      <rect x="2.6" y="5.4" width="18.8" height="13.2" rx="2.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.6 10h18.8" stroke="currentColor" strokeWidth="2.4" opacity="0.5" />
      <path d="M6.2 15h3.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15.4 14.2a1.6 1.6 0 1 0 0 2.4 1.6 1.6 0 1 0 0-2.4Z" stroke="currentColor" strokeWidth="1" />
    </>
  ),
  game: (
    <>
      <path
        d="M7.4 7.6h9.2a4.4 4.4 0 0 1 4.3 3.5l.5 3.2a2.6 2.6 0 0 1-4.6 2.1l-1.4-1.9H8.6l-1.4 1.9a2.6 2.6 0 0 1-4.6-2.1l.5-3.2a4.4 4.4 0 0 1 4.3-3.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M8 11.4v2.4M6.8 12.6h2.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="15.6" cy="11.8" r="0.9" fill="currentColor" />
      <circle cx="17.4" cy="13.6" r="0.9" fill="currentColor" />
    </>
  ),
};

export const ServiceIcon: React.FC<{ name: ServiceIconName; className?: string }> = ({
  name,
  className = "h-6 w-6",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    {paths[name]}
  </svg>
);

export const WordmarkGlyph: React.FC<{ className?: string }> = ({ className = "h-[18px] w-[18px]" }) => (
  <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
    <path
      d="M2.6 6.4c0-1 .8-1.8 1.8-1.8h11.2c1 0 1.8.8 1.8 1.8v1.5a2.3 2.3 0 0 0 0 4.2v1.5c0 1-.8 1.8-1.8 1.8H4.4c-1 0-1.8-.8-1.8-1.8v-1.5a2.3 2.3 0 0 0 0-4.2V6.4Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path d="M12.4 6.6v6.8" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1.5 2" />
  </svg>
);
