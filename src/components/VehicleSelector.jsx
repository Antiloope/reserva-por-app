import { useEffect } from 'react'
import { useTranslation } from '../utils/useTranslation'
import { CarIcon, PickupIcon, VanIcon } from './VehicleIcons'
import './VehicleSelector.css'

const iconMap = {
  car: CarIcon,
  pickup: PickupIcon,
  van: VanIcon
}

const VehicleSelector = ({ value, onChange, error, vehicleTypes = [] }) => {
  const { t, language } = useTranslation()

  // Seleccionar el primer elemento por defecto cuando hay vehicleTypes y no hay valor seleccionado
  useEffect(() => {
    if (vehicleTypes.length > 0 && !value) {
      const firstVehicle = vehicleTypes[0]
      const firstName = firstVehicle.name?.[language] || firstVehicle.name?.es || firstVehicle.id
      onChange(firstVehicle.id, firstName)
    }
  }, [vehicleTypes, value, onChange, language])

  // Si no hay tipos de vehículo, no renderizar nada
  if (!vehicleTypes || vehicleTypes.length === 0) {
    return null
  }

  const handleSelect = (vehicleId, vehicleName) => {
    onChange(vehicleId, vehicleName)
  }

  return (
    <div className="vehicle-selector">
      <label className="form-label">
        {t('vehicleType')}
        <span className="required-indicator"> *</span>
      </label>
      
      <div className="vehicle-cards-grid">
        {vehicleTypes.map((vehicle) => {
          const IconComponent = iconMap[vehicle.icon]
          const vehicleName = vehicle.name?.[language] || vehicle.name?.es || vehicle.id
          const vehicleDescription = vehicle.description?.[language] || vehicle.description?.es || ''
          const isSelected = value === vehicle.id
          const priceIndicator = vehicle.priceIndicator

          return (
            <button
              key={vehicle.id}
              type="button"
              className={`vehicle-card ${isSelected ? 'selected' : ''}`}
              onClick={() => handleSelect(vehicle.id, vehicleName)}
              aria-pressed={isSelected}
            >
              <div className="vehicle-card-content">
                {IconComponent && (
                  <IconComponent className="vehicle-icon" />
                )}
                <div className="vehicle-text">
                  <h3 className="vehicle-name">{vehicleName}</h3>
                  <p className="vehicle-description">{vehicleDescription}</p>
                  {priceIndicator ? (
                    <div className="vehicle-price" aria-label={`Price: ${priceIndicator}`}>
                      {priceIndicator}
                    </div>
                  ) : null}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {error && <span className="error-message">{error}</span>}
    </div>
  )
}

export default VehicleSelector
