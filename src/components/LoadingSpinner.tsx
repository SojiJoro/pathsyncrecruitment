// components/LoadingSpinner.tsx
export default function LoadingSpinner() {
  return (
    <div className="loading_spinner">
      <div className="spinner"></div>
    </div>
  )
}

// Add these styles
.loading_spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--off-white);
  border-top: 3px solid var(--teal-dark);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
