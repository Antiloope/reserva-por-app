import { useState, useEffect } from 'react'
import configurations from '../data/configurations.json'

export const useCompanyConfig = (companySlug) => {
  const [config, setConfig] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    try {
      // Si no hay companySlug, simplemente no cargar nada (no es un error)
      if (!companySlug) {
        setConfig(null)
        setError(null)
        setLoading(false)
        return
      }

      const company = configurations.companies.find(
        (c) => c.slug === companySlug
      )

      if (company) {
        setConfig(company)
        setError(null)
      } else {
        setError('Company not found')
        setConfig(null)
      }
    } catch (err) {
      setError(err.message)
      setConfig(null)
    } finally {
      setLoading(false)
    }
  }, [companySlug])

  return { config, loading, error }
}

