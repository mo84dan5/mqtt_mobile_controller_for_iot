import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mqtt_mobile_controller_for_iot/frontend/dist/',
  plugins: [react()],
})
