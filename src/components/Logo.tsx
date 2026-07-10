import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showSubtitle?: boolean;
  animated?: boolean;
}

export default function Logo({ className = '', size = 'md', showSubtitle = false, animated = true }: LogoProps) {
  // Height sizing for the SVG container
  const sizeClasses = {
    sm: 'h-9 md:h-10',
    md: 'h-14 md:h-16',
    lg: 'h-32 md:h-36',
    xl: 'h-44 md:h-48',
    custom: '',
  };

  const currentSizeClass = sizeClasses[size];

  return (
    <div className={`inline-flex items-center select-none ${currentSizeClass} ${className}`}>
      <svg
        viewBox="0 0 350 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full overflow-visible"
      >
        <defs>
          {/* Neon cyan to royal blue gradient for both the A and the I */}
          <linearGradient id="neonCyanGrad" x1="110" y1="20" x2="175" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* Understated tech roots/fibers gradient */}
          <linearGradient id="laserRootGrad" x1="130" y1="80" x2="130" y2="105" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
          </linearGradient>

          {/* Holographic neon glow filter */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glowing node filter */}
          <filter id="dotGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ==================== THE TYPOGRAPHIC RAICES (Concept 4 + Stylized AI) ==================== */}
        
        {/* Letter 'R' - Clean, geometric, sharp sans */}
        <text
          x="28"
          y="78"
          fill="#ffffff"
          fontSize="66"
          fontFamily="'Inter', system-ui, -apple-system, sans-serif"
          fontWeight="900"
          letterSpacing="-0.03em"
        >
          R
        </text>

        {/* The Stylized Glowing 'A' Caret (Λ) & Glowing 'I' - Styled AI Group */}
        <g filter="url(#neonGlow)">
          {/* Stylized 'A' Caret */}
          <path
            d="M 90,78 L 116,22 L 142,78"
            stroke="url(#neonCyanGrad)"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cybernetic apex joint indicator on top of A */}
          <circle cx="116" cy="22" r="4.5" fill="#ffffff" filter="url(#dotGlow)" />
          <circle cx="116" cy="22" r="2.5" fill="#00f0ff" />

          {/* Stylized 'I' - Glowing vertical stem */}
          <path
            d="M 166,38 L 166,78"
            stroke="url(#neonCyanGrad)"
            strokeWidth="8.5"
            strokeLinecap="round"
          />
          {/* Glowing dot of the 'I' aligning with 'A' apex height */}
          <circle cx="166" cy="22" r="4.5" fill="#ffffff" filter="url(#dotGlow)" />
          <circle cx="166" cy="22" r="2.5" fill="#00f0ff" />
        </g>

        {/* Letter 'C' */}
        <text
          x="194"
          y="78"
          fill="#ffffff"
          fontSize="66"
          fontFamily="'Inter', system-ui, -apple-system, sans-serif"
          fontWeight="900"
          letterSpacing="-0.03em"
        >
          C
        </text>

        {/* Letter 'E' */}
        <text
          x="246"
          y="78"
          fill="#ffffff"
          fontSize="66"
          fontFamily="'Inter', system-ui, -apple-system, sans-serif"
          fontWeight="900"
          letterSpacing="-0.03em"
        >
          E
        </text>

        {/* Letter 'S' */}
        <text
          x="293"
          y="78"
          fill="#ffffff"
          fontSize="66"
          fontFamily="'Inter', system-ui, -apple-system, sans-serif"
          fontWeight="900"
          letterSpacing="-0.03em"
        >
          S
        </text>

        {/* ==================== INTEGRATED ULTRA-MODERN SYNTHETIC ROOTS ==================== */}
        {/* Sleek, minimalistic laser lines flowing down from the base of the letters, grounding them */}
        <g opacity="0.75" filter="url(#neonGlow)">
          {/* Central root cascading from caret 'A' (Λ) */}
          <path
            d="M 116,74 L 116,84 C 116,92 108,96 100,99"
            stroke="url(#laserRootGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="100" cy="99" r="1.5" fill="#00f0ff" />

          <path
            d="M 116,74 L 116,84 C 116,92 124,96 132,99"
            stroke="url(#laserRootGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="132" cy="99" r="1.5" fill="#3b82f6" />

          {/* Root cascading from the stylized 'I' */}
          <path
            d="M 166,74 L 166,84 C 166,92 174,96 182,99"
            stroke="url(#laserRootGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="182" cy="99" r="1.5" fill="#00f0ff" />

          {/* Understated circuit trace under 'R' */}
          <path
            d="M 50,78 L 50,86 C 50,90 42,92 36,94"
            stroke="url(#laserRootGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="36" cy="94" r="1.2" fill="#00f0ff" />

          {/* Understated circuit trace under 'S' */}
          <path
            d="M 316,78 L 316,86 C 316,90 324,92 330,94"
            stroke="url(#laserRootGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="330" cy="94" r="1.2" fill="#3b82f6" />
        </g>

        {/* Animated electrical data packets traveling through the custom caret (A) and roots */}
        {animated && (
          <g opacity="0.9">
            {/* Left caret slope pulse */}
            <circle cx="0" cy="0" r="1.5" fill="#ffffff" filter="url(#dotGlow)">
              <animateMotion
                path="M 90,78 L 116,22"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Right caret slope pulse */}
            <circle cx="0" cy="0" r="1.5" fill="#ffffff" filter="url(#dotGlow)">
              <animateMotion
                path="M 116,22 L 142,78"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </circle>
            {/* I-stem downward pulse */}
            <circle cx="0" cy="0" r="1.5" fill="#ffffff" filter="url(#dotGlow)">
              <animateMotion
                path="M 166,22 L 166,78"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )}


      </svg>
    </div>
  );
}
