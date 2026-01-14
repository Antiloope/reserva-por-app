import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './LanguageSelector.css'

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const languages = [
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'pt', label: 'PT', flag: '🇧🇷' }
  ]

  const currentLang = languages.find(l => l.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (code) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="language-selector-container" ref={dropdownRef}>
      <button 
        className={`language-selector-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className="current-flag">{currentLang.flag}</span>
        <span className="current-code">{currentLang.code.toUpperCase()}</span>
        <span className={`chevron ${isOpen ? 'up' : 'down'}`}>▼</span>
      </button>

      {isOpen && (
        <ul className="language-dropdown">
          {languages.map((lang) => (
            <li 
              key={lang.code}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleSelect(lang.code)}
            >
              <span className="option-flag">{lang.flag}</span>
              <span className="option-label">{lang.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSelector

