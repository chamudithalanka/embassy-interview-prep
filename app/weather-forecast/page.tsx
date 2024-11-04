'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faTemperatureHigh, faWind } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for cities. Replace with actual data and API call.
const cities = ['Bucharest', 'Cluj-Napoca', 'Timisoara', 'Iasi', 'Constanta']

export default function WeatherForecastPage() {
  const [selectedCity, setSelectedCity] = useState('')
  const [forecast, setForecast] = useState(null)

  const fetchWeather = async () => {
    // Replace this with an actual API call
    const mockForecast = {
      temperature: Math.floor(Math.random() * 30) + 10,
      condition: ['Sunny', 'Cloudy', 'Rainy'][Math.floor(Math.random() * 3)],
      windSpeed: Math.floor(Math.random() * 20) + 5
    }
    setForecast(mockForecast)
  }

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FontAwesomeIcon icon={faCloudSun} className="mr-2" />
        Weather Forecast
      </motion.h1>
      <div className="mb-8 flex flex-col md:flex-row items-center gap-4 justify-center">
        
        <Select onValueChange={setSelectedCity}>
          <SelectTrigger className="w-full md:w-[200px] bg-white">
            <SelectValue placeholder="Select a city" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city, index) => (
              <SelectItem key={index} value={city}>{city}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button 
          onClick={fetchWeather} 
          disabled={!selectedCity}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          Get Forecast
        </Button>
      </div>
      {forecast && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">
                <FontAwesomeIcon icon={faCloudSun} className="mr-2" />
                {selectedCity} Weather
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faTemperatureHigh} className="text-2xl text-red-500 mr-2" />
                  <p className="text-lg">Temperature: {forecast.temperature}°C</p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faCloudSun} className="text-2xl text-yellow-500 mr-2" />
                  <p className="text-lg">Condition: {forecast.condition}</p>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faWind} className="text-2xl text-blue-500 mr-2" />
                  <p className="text-lg">Wind Speed: {forecast.windSpeed} km/h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}