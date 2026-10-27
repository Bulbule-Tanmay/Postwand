'use client';

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 64 64"
      fill="none"
      className="mt-[8px] min-w-[48px] min-h-[48px]"
      role="img"
      aria-label="Postwand"
    >
      <defs>
        <linearGradient id="pw-g" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#8B5CF6"/>
        <stop offset="1" stopColor="#4338CA"/>
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#pw-g)"/>
      <path d="M15 50 L37 28" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round"/>
      <path d="M37 28 L41 24" stroke="#FDE68A" strokeWidth="6.5" strokeLinecap="round"/>
      <path d="M45 8 Q46 18 56 19 Q46 20 45 30 Q44 20 34 19 Q44 18 45 8 Z" fill="#FFFFFF"/>
      <path d="M52 35 Q52.6 38.4 56 39 Q52.6 39.6 52 43 Q51.4 39.6 48 39 Q51.4 38.4 52 35 Z" fill="#FDE68A"/>
      <path d="M22 13 Q22.5 15.5 25 16 Q22.5 16.5 22 19 Q21.5 16.5 19 16 Q21.5 15.5 22 13 Z" fill="#FFFFFF" fillOpacity="0.85"/>
    </svg>
  );
};
