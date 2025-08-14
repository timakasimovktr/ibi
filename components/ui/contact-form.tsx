"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

// Phone validation for Uzbekistan format: +998 XX XXX-XX-XX
const validateUzbekPhone = (phone: string): boolean => {
  const phoneRegex = /^\+998\s\d{2}\s\d{3}-\d{2}-\d{2}$/
  return phoneRegex.test(phone)
}

// Format phone input as user types
const formatPhoneInput = (value: string): string => {
  // Remove all non-digits except +
  const digits = value.replace(/[^\d+]/g, "")

  // If it doesn't start with +998, add it
  if (!digits.startsWith("+998")) {
    return "+998 "
  }

  // Extract digits after +998
  const phoneDigits = digits.slice(4)

  // Format: +998 XX XXX-XX-XX
  let formatted = "+998"
  if (phoneDigits.length > 0) {
    formatted += " " + phoneDigits.slice(0, 2)
  }
  if (phoneDigits.length > 2) {
    formatted += " " + phoneDigits.slice(2, 5)
  }
  if (phoneDigits.length > 5) {
    formatted += "-" + phoneDigits.slice(5, 7)
  }
  if (phoneDigits.length > 7) {
    formatted += "-" + phoneDigits.slice(7, 9)
  }

  return formatted
}

interface ContactFormProps {
  title?: string
  description?: string
  size?: "small" | "large"
  onClose?: () => void
  isModal?: boolean
  onSuccess?: () => void
}

function ContactForm({
  title = "Получить консультацию",
  description,
  size = "small",
  onClose,
  isModal = false,
  onSuccess,
}: ContactFormProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("+998 ")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneInput(e.target.value)
    setPhone(formatted)

    // Clear phone error when user starts typing
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: { name?: string; phone?: string } = {}

    if (!name.trim()) {
      newErrors.name = "Введите ваше имя"
    }

    if (!validateUzbekPhone(phone)) {
      newErrors.phone = "Введите корректный номер телефона"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setName("")
      setPhone("+998 ")
      setMessage("")
      setErrors({})
      if (onClose) onClose()
      if (onSuccess) onSuccess()
    } catch (error) {
      alert("Ошибка при отправке заявки. Попробуйте еще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const cardContent = (
    <Card
      className={`${size === "large" ? "max-w-2xl mx-auto" : "max-w-md"} bg-white border-blue-100 ${
        isModal ? "w-full max-w-xs sm:max-w-md mx-4 sm:mx-auto" : ""
      }`}
    >
      <CardHeader
        className={`${size === "large" ? "text-center" : ""} ${isModal ? "relative text-center p-4 sm:p-6" : "p-4 sm:p-6"}`}
      >
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="absolute right-3 sm:right-4 top-3 sm:top-4 text-gray-400 hover:text-gray-600 cursor-pointer p-1"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        )}
        <CardTitle className="text-blue-900 text-base sm:text-lg lg:text-xl pr-8">{title}</CardTitle>
        <div className="flex justify-center mt-2">
          <Badge className="bg-yellow-500 text-yellow-900 font-semibold px-2 sm:px-3 py-1 text-xs sm:text-sm">
            🎁 БЕСПЛАТНО
          </Badge>
        </div>
        {description && (
          <CardDescription className="text-gray-600 text-xs sm:text-sm lg:text-base mt-2">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }))
              }}
              className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base h-10 sm:h-11 ${errors.name ? "border-red-500" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Input
              type="tel"
              placeholder="+998 XX XXX-XX-XX"
              value={phone}
              onChange={handlePhoneChange}
              className={`border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base h-10 sm:h-11 ${errors.phone ? "border-red-500" : ""}`}
            />
            {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
          </div>

          {(size === "large" || isModal) && (
            <div>
              <Textarea
                placeholder="Опишите вашу задачу"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
              />
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-colors cursor-pointer text-sm sm:text-base"
          >
            {isSubmitting ? "Отправляем..." : "Получить консультацию"}
          </Button>
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
            ⚡ Ответим в течение 15 минут • 💯 Первая консультация бесплатно
          </p>
        </form>
      </CardContent>
    </Card>
  )

  if (isModal) {
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-2 sm:p-4 z-50"
        onClick={(e) => {
          if (e.target === e.currentTarget && onClose) {
            onClose()
          }
        }}
      >
        {cardContent}
      </div>
    )
  }

  return cardContent
}

export default ContactForm
