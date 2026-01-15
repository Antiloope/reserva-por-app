import { translations } from '../data/translations'

export const generateWhatsAppURL = (companyNumber, formData, language = 'es') => {
  const t = translations[language].whatsappMessage
  
  // Limpiar el número de WhatsApp (solo números)
  const cleanNumber = String(companyNumber).replace(/\D/g, '')
  
  // Formatear fecha a formato legible (YYYY-MM-DD -> DD/MM/YYYY)
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const [year, month, day] = dateString.split('-')
    return `${day}/${month}/${year}`
  }
  
  // Construir el mensaje formateado
  let message = `*${t.header}*\n\n`
  const isRoundTrip = formData.tripType === 'roundTrip'

  if (isRoundTrip) {
    message += `*${t.outbound}*\n`
    message += `\n`
  }

  message += `*${t.origin}:* ${formData.origin}\n`
  message += `*${t.destination}:* ${formData.destination}\n`
  message += `*${t.date}:* ${formatDate(formData.date)}\n`
  message += `*${t.time}:* ${formData.time}\n`
  
  if (formData.passengers) {
    message += `*${t.passengers}:* ${formData.passengers}\n`
  }
  
  if (formData.vehicleType) {
    message += `*${t.vehicleType}:* ${formData.vehicleType}\n`
  }

  if (isRoundTrip) {
    message += `\n`
    message += `*${t.return}*\n`
    message += `\n`
    if (formData.returnOrigin) {
      message += `*${t.returnOrigin}:* ${formData.returnOrigin}\n`
    }
    if (formData.returnDestination) {
      message += `*${t.returnDestination}:* ${formData.returnDestination}\n`
    }
    if (formData.returnDate) {
      message += `*${t.returnDate}:* ${formatDate(formData.returnDate)}\n`
    }
    if (formData.returnTime) {
      message += `*${t.returnTime}:* ${formData.returnTime}\n`
    }
    if (formData.returnPassengers) {
      message += `*${t.returnPassengers}:* ${formData.returnPassengers}\n`
    }
  }
  
  if (formData.notes) {
    message += `\n`
    message += `*${t.notes}:* ${formData.notes}\n`
  }
  
  // Codificar el mensaje para URL
  const encodedMessage = encodeURIComponent(message)
  
  // Generar URL de WhatsApp
  const whatsappURL = `https://wa.me/${cleanNumber}?text=${encodedMessage}`
  
  return whatsappURL
}

