export const CarIcon = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sedan - Vista lateral */}
    <path
      d="M12 28C12 28 14 28 16 28C16 28 18 18 28 18L52 18C58 18 62 22 64 28L68 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Cuerpo inferior */}
    <path
      d="M8 28H72C72 28 72 32 68 32H12C8 32 8 28 8 28Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Ventanas */}
    <path
      d="M30 18L28 24H38L38 18H30Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M40 18V24H52L56 24C56 22 54 18 52 18H40Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Rueda delantera */}
    <circle cx="22" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="22" cy="32" r="2.5" fill="currentColor" />
    {/* Rueda trasera */}
    <circle cx="58" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="58" cy="32" r="2.5" fill="currentColor" />
  </svg>
)

export const PickupIcon = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Pickup - Vista lateral */}
    {/* Cabina */}
    <path
      d="M10 28L12 20C12 20 14 12 24 12H32C36 12 38 16 38 20V28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Ventana cabina */}
    <path
      d="M16 20C16 16 18 14 22 14H30C32 14 34 16 34 18V22H16V20Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Caja de carga */}
    <path
      d="M38 20H68V28H38V20Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Borde caja */}
    <path
      d="M40 20V16H66V20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Cuerpo inferior */}
    <path
      d="M6 28H74C74 28 74 32 70 32H10C6 32 6 28 6 28Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Rueda delantera */}
    <circle cx="20" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="20" cy="32" r="2.5" fill="currentColor" />
    {/* Rueda trasera */}
    <circle cx="60" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="60" cy="32" r="2.5" fill="currentColor" />
  </svg>
)

export const VanIcon = ({ className = '' }) => (
  <svg
    className={className}
    viewBox="0 0 80 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Van/Minibus - Vista lateral */}
    {/* Cuerpo principal */}
    <path
      d="M8 28V14C8 10 12 8 16 8H56C64 8 68 12 70 18L72 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Ventana frontal */}
    <path
      d="M56 10C62 10 64 14 66 18H56V10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Ventanas laterales */}
    <path
      d="M12 10H20V18H12V10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M24 10H32V18H24V10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M36 10H44V18H36V10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Puerta corredera */}
    <path
      d="M46 10H52V24H46V10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Cuerpo inferior */}
    <path
      d="M4 28H76C76 28 76 32 72 32H8C4 32 4 28 4 28Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Rueda delantera */}
    <circle cx="18" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="18" cy="32" r="2.5" fill="currentColor" />
    {/* Rueda trasera */}
    <circle cx="62" cy="32" r="6" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="62" cy="32" r="2.5" fill="currentColor" />
  </svg>
)
