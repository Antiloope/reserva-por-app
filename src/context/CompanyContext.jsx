import { createContext, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useCompanyConfig } from '../hooks/useCompanyConfig'

const CompanyContext = createContext(null)

export const CompanyProvider = ({ children }) => {
  const [searchParams] = useSearchParams()
  const companySlug = searchParams.get('company')
  const { config, loading, error } = useCompanyConfig(companySlug)

  return (
    <CompanyContext.Provider value={{ config, loading, error, companySlug }}>
      {children}
    </CompanyContext.Provider>
  )
}

export const useCompany = () => {
  const context = useContext(CompanyContext)
  if (!context) {
    throw new Error('useCompany must be used within CompanyProvider')
  }
  return context
}

