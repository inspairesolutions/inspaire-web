import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
]

export default function LanguageSelector() {
  const { i18n } = useTranslation()

  const handleChange = (langCode: string) => {
    i18n.changeLanguage(langCode)
  }

  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleChange(lang.code)}
          className={`
            px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300
            ${i18n.language === lang.code
              ? 'bg-white dark:bg-neon-cyan/20 text-neon-blue dark:text-neon-cyan shadow-sm'
              : 'text-slate-500 dark:text-white/40 hover:text-slate-700 dark:hover:text-white/70'
            }
          `}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
