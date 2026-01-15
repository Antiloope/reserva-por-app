export const CarIcon = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sombra de suelo */}
    <ellipse cx="40" cy="35" rx="30" ry="2" fill="currentColor" fillOpacity="0.1" />
    
    {/* Cuerpo principal (Sedán) */}
    <path
      d="M10 28H14C14 26 16 25 18 25C20 25 22 26 22 28H58C58 26 60 25 62 25C64 25 66 26 66 28H70V26C70 22 68 21 64 20L62 18C60 16 58 14 54 14H30C26 14 24 16 22 18L20 20C16 21 10 22 10 26V28Z"
      fill="currentColor"
    />
    
    {/* Ventanas (Recortes) */}
    <path
      d="M26 16.5L24 20H40V16.5H26Z"
      fill="white"
      fillOpacity="0.9"
    />
    <path
      d="M42 16.5V20H58L54 16.5H42Z"
      fill="white"
      fillOpacity="0.9"
    />
    
    {/* Ruedas */}
    <circle cx="18" cy="28.5" r="5.5" fill="currentColor" />
    <circle cx="18" cy="28.5" r="2.5" fill="white" />
    <circle cx="62" cy="28.5" r="5.5" fill="currentColor" />
    <circle cx="62" cy="28.5" r="2.5" fill="white" />
  </svg>
)

export const PickupIcon = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sombra de suelo */}
    <ellipse cx="40" cy="35" rx="32" ry="2" fill="currentColor" fillOpacity="0.1" />
    
    {/* Cuerpo principal (Pickup) */}
    <path
      d="M8 28H14C14 26 16 25 18 25C20 25 22 26 22 28H58C58 26 60 25 62 25C64 25 66 26 66 28H72V24C72 24 72 20 68 20H42V14C42 12 40 10 36 10H26C22 10 20 12 18 14L16 16C12 18 8 20 8 24V28Z"
      fill="currentColor"
    />
    
    {/* Ventana cabina (Recortes) */}
    <path
      d="M22 13.5L20 17H38V13.5H22Z"
      fill="white"
      fillOpacity="0.9"
    />
    
    {/* Ruedas */}
    <circle cx="18" cy="28.5" r="5.5" fill="currentColor" />
    <circle cx="18" cy="28.5" r="2.5" fill="white" />
    <circle cx="62" cy="28.5" r="5.5" fill="currentColor" />
    <circle cx="62" cy="28.5" r="2.5" fill="white" />
  </svg>
)

export const VanIcon = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sombra de suelo */}
    <ellipse cx="40" cy="35" rx="34" ry="2" fill="currentColor" fillOpacity="0.1" />
    
    {/* Cuerpo principal (Van) */}
    <path
      d="M6 28H14C14 26 16 25 18 25C20 25 22 26 22 28H58C58 26 60 25 62 25C64 25 66 26 66 28H74V14C74 10 70 8 66 8H16C12 8 8 10 8 14L6 20V28Z"
      fill="currentColor"
    />
    
    {/* Ventanas (Recortes) */}
    <path
      d="M12 11H22V17H12V11Z"
      fill="white"
      fillOpacity="0.9"
    />
    <path
      d="M25 11H35V17H25V11Z"
      fill="white"
      fillOpacity="0.9"
    />
    <path
      d="M38 11H48V17H38V11Z"
      fill="white"
      fillOpacity="0.9"
    />
    <path
      d="M51 11H68L64 17H51V11Z"
      fill="white"
      fillOpacity="0.9"
    />
    
    {/* Ruedas */}
    <circle cx="18" cy="28.5" r="5.5" fill="currentColor" />
    <circle cx="18" cy="28.5" r="2.5" fill="white" />
    <circle cx="62" cy="28.5" r="5.5" fill="currentColor" />
    <circle cx="62" cy="28.5" r="2.5" fill="white" />
  </svg>
)
