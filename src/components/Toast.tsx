// components/Toast.tsx
import { motion, AnimatePresence } from 'framer-motion'

interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info'
  onClose: () => void
}

export default function Toast({ message, type, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={`toast toast_${type}`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <p>{message}</p>
        <button onClick={onClose}>×</button>
      </motion.div>
    </AnimatePresence>
  )
}

// Add these styles
.toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.toast_success {
  background: #4caf50;
  color: white;
}

.toast_error {
  background: #f44336;
  color: white;
}

.toast_info {
  background: var(--teal-mid);
  color: white;
}
