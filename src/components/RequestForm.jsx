import { useEffect, useState } from 'react'
import { useTranslation } from '../utils/useTranslation'
import { useCompany } from '../context/CompanyContext'
import { generateWhatsAppURL } from '../utils/whatsapp'
import LocationInput from './LocationInput'
import DateTimePicker from './DateTimePicker'
import VehicleSelector from './VehicleSelector'
import './RequestForm.css'

const RequestForm = () => {
  const { t, language } = useTranslation()
  const { config } = useCompany()
  
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    date: '',
    time: '',
    passengers: '',
    tripType: 'oneWay',
    useSameReturnOrigin: true,
    returnOrigin: '',
    returnDestination: '',
    returnDate: '',
    returnTime: '',
    returnPassengers: '',
    vehicleType: '',
    vehicleTypeName: '',
    notes: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (formData.useSameReturnOrigin) {
      setFormData((prev) =>
        prev.returnOrigin === prev.destination ? prev : { ...prev, returnOrigin: prev.destination }
      )
    }
  }, [formData.destination, formData.useSameReturnOrigin])

  const handleTripTypeChange = (nextType) => {
    setFormData((prev) => {
      if (nextType === 'roundTrip' && prev.tripType !== 'roundTrip') {
        return {
          ...prev,
          tripType: nextType,
          useSameReturnOrigin: true,
          returnOrigin: prev.destination,
          returnPassengers: prev.returnPassengers || prev.passengers
        }
      }

      return { ...prev, tripType: nextType }
    })

    if (nextType === 'oneWay') {
      setErrors((prev) => {
        const {
          returnOrigin,
          returnDestination,
          returnDate,
          returnTime,
          returnPassengers,
          ...rest
        } = prev
        return rest
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    const isRoundTrip = formData.tripType === 'roundTrip'

    if (!formData.origin.trim()) {
      newErrors.origin = t('selectOriginError')
    }

    if (!formData.destination.trim()) {
      newErrors.destination = t('selectDestinationError')
    }

    if (!formData.date) {
      newErrors.date = t('dateRequired')
    } else {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const selectedDate = new Date(formData.date)
      
      if (selectedDate < today) {
        newErrors.date = t('invalidDate')
      }
    }

    if (!formData.time) {
      newErrors.time = t('timeRequired')
    }

    if (!formData.passengers) {
      newErrors.passengers = t('passengersRequired')
    }

    if (isRoundTrip) {
      if (!formData.useSameReturnOrigin && !formData.returnOrigin.trim()) {
        newErrors.returnOrigin = t('returnOriginRequired')
      }

      if (!formData.returnDestination.trim()) {
        newErrors.returnDestination = t('returnDestinationRequired')
      }

      if (!formData.returnDate) {
        newErrors.returnDate = t('returnDateRequired')
      } else {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const selectedReturnDate = new Date(formData.returnDate)
        if (selectedReturnDate < today) {
          newErrors.returnDate = t('invalidDate')
        }
      }

      if (!formData.returnTime) {
        newErrors.returnTime = t('returnTimeRequired')
      }

      if (!formData.returnPassengers) {
        newErrors.returnPassengers = t('returnPassengersRequired')
      }
    }

    // Solo validar vehicleType si hay tipos de vehículo configurados
    const hasVehicleTypes = config?.vehicleTypes && config.vehicleTypes.length > 0
    if (hasVehicleTypes && !formData.vehicleType) {
      newErrors.vehicleType = t('vehicleTypeRequired')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Generar URL de WhatsApp
    const whatsappURL = generateWhatsAppURL(
      config?.whatsappNumber || '',
      {
        origin: formData.origin,
        destination: formData.destination,
        date: formData.date,
        time: formData.time,
        passengers: formData.passengers || null,
        tripType: formData.tripType,
        returnOrigin: formData.returnOrigin || null,
        returnDestination: formData.returnDestination || null,
        returnDate: formData.returnDate || null,
        returnTime: formData.returnTime || null,
        returnPassengers: formData.returnPassengers || null,
        vehicleType: formData.vehicleTypeName || null,
        notes: formData.notes || null
      },
      language
    )

    // Redirigir a WhatsApp
    window.location.href = whatsappURL
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <div className="form-fields-grid">
        <LocationInput
          label={t('origin')}
          value={formData.origin}
          onChange={(value) => setFormData({ ...formData, origin: value })}
          error={errors.origin}
          required
        />

        <LocationInput
          label={t('destination')}
          value={formData.destination}
          onChange={(value) => setFormData({ ...formData, destination: value })}
          error={errors.destination}
          required
        />

        <div className="trip-toggle">
          <span className="form-label">{t('tripType')}</span>
          <div className="trip-toggle-group">
            <button
              type="button"
              className={`trip-toggle-button ${formData.tripType === 'oneWay' ? 'active' : ''}`}
              onClick={() => handleTripTypeChange('oneWay')}
            >
              {t('oneWay')}
            </button>
            <button
              type="button"
              className={`trip-toggle-button ${formData.tripType === 'roundTrip' ? 'active' : ''}`}
              onClick={() => handleTripTypeChange('roundTrip')}
            >
              {t('roundTrip')}
            </button>
          </div>
        </div>

        <div className="form-row">
          <div className="form-field compact-field">
            <label className="form-label">
              {t('passengers')}
              <span className="required-asterisk"> *</span>
            </label>
            <input
              type="number"
              className={`form-input ${errors.passengers ? 'error' : ''}`}
              min="1"
              placeholder={t('passengersPlaceholder')}
              value={formData.passengers}
              onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
            />
            {errors.passengers && (
              <span className="error-message">{errors.passengers}</span>
            )}
          </div>

          <DateTimePicker
            date={formData.date}
            time={formData.time}
            onDateChange={(value) => setFormData({ ...formData, date: value })}
            onTimeChange={(value) => setFormData({ ...formData, time: value })}
            dateError={errors.date}
            timeError={errors.time}
          />
        </div>

        {formData.tripType === 'roundTrip' && (
          <div className="return-section">
            <div className="return-section-header">
              <span className="section-title">{t('returnSection')}</span>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.useSameReturnOrigin}
                  onChange={(e) =>
                    setFormData({ ...formData, useSameReturnOrigin: e.target.checked })
                  }
                />
                <span>{t('useSameReturnOrigin')}</span>
              </label>
            </div>

            {!formData.useSameReturnOrigin ? (
              <LocationInput
                label={t('returnOrigin')}
                value={formData.returnOrigin}
                onChange={(value) => setFormData({ ...formData, returnOrigin: value })}
                error={errors.returnOrigin}
              placeholder={t('selectOrigin')}
                required
              />
            ) : (
              <div className="form-field compact-field">
                <label className="form-label">{t('returnOrigin')}</label>
                <div className="form-static">
                  {formData.destination || t('selectDestination')}
                </div>
              </div>
            )}

            <LocationInput
              label={t('returnDestination')}
              value={formData.returnDestination}
              onChange={(value) => setFormData({ ...formData, returnDestination: value })}
              error={errors.returnDestination}
              placeholder={t('selectDestination')}
              required
            />

            <div className="form-row">
              <div className="form-field compact-field">
                <label className="form-label">
                  {t('returnPassengers')}
                  <span className="required-asterisk"> *</span>
                </label>
                <input
                  type="number"
                  className={`form-input ${errors.returnPassengers ? 'error' : ''}`}
                  min="1"
                  placeholder={t('passengersPlaceholder')}
                  value={formData.returnPassengers}
                  onChange={(e) =>
                    setFormData({ ...formData, returnPassengers: e.target.value })
                  }
                />
                {errors.returnPassengers && (
                  <span className="error-message">{errors.returnPassengers}</span>
                )}
              </div>

              <DateTimePicker
                date={formData.returnDate}
                time={formData.returnTime}
                onDateChange={(value) => setFormData({ ...formData, returnDate: value })}
                onTimeChange={(value) => setFormData({ ...formData, returnTime: value })}
                dateError={errors.returnDate}
                timeError={errors.returnTime}
              />
            </div>
          </div>
        )}

        <VehicleSelector
          value={formData.vehicleType}
          onChange={(vehicleId, vehicleName) => 
            setFormData({ ...formData, vehicleType: vehicleId, vehicleTypeName: vehicleName })
          }
          error={errors.vehicleType}
          vehicleTypes={config?.vehicleTypes || []}
        />

        <div className="form-field compact-field">
          <label className="form-label">
            {t('notes')}
            <span className="optional"> ({t('optional')})</span>
          </label>
          <textarea
            className="form-textarea"
            rows="2"
            placeholder={t('notesPlaceholder')}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          />
        </div>
      </div>

      <button
        type="submit"
        className="submit-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? '...' : t('sendRequest')}
      </button>
    </form>
  )
}

export default RequestForm
