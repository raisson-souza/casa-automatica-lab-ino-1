import { LightSensor } from 'expo-sensors'
import { StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { useState, useEffect, useRef } from 'react'
import Service from '../services/Service'

export default function LightSensorComponent({}) {
  const [{ illuminance }, setData] = useState({ illuminance: 0 })
  const [subscription, setSubscription] = useState<any>(null)
  const illuminanceRef = useRef<number>(0)
  const intervalRef = useRef<NodeJS.Timeout>()
  const exitIntervalRef = useRef<boolean>(false)

  const subscribe = () => {
    setSubscription(
      LightSensor.addListener(sensorData => {
        setData(sensorData)
        illuminanceRef.current = Number.parseInt(sensorData.illuminance.toString().split(".")[0])
      })
    )
  }

  const unsubscribe = () => {
    if (!exitIntervalRef.current) {
      subscription && subscription.remove()
      setSubscription(null)
    }
  }

  useEffect(() => {
    subscribe()

    const interval = setInterval(async () => {
      if (!exitIntervalRef.current) {
        await turnAll(!(illuminanceRef.current >= 150))
      }
    }, 5000)

    intervalRef.current = interval
  }, [])

  useFocusEffect(() => {
    exitIntervalRef.current = false
    return () => {
      exitIntervalRef.current = true
      unsubscribe()
    }
  })

  const parsedIlluminance = Number.parseInt(illuminance.toString().split(".")[0])
  const tooMuchLight = parsedIlluminance >= 150

  const turnAll = async (action: boolean) => {
    const ledsNames = ["LED1", "LED2", "LED3", "LED4", "LED5", "LED6"]

    for (const ledName of ledsNames) {
        await Service.SetLed(ledName, action)
    }
  }

  return (
    <View style={styles.sensor}>
      <Text style={ styles.text }>Sensor de Luz</Text>
      <Text style={ styles.text }>{ `${ parsedIlluminance }lx` }</Text>
      <Text style={ styles.text }>
        {
          tooMuchLight
            ? "Luzes serão desligadas"
            : "Luzes serão ligadas"
        }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sensor: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
})