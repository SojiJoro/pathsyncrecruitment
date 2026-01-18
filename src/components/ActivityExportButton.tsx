import React from 'react'

export default function ActivityExportButton() {
  const handleExport = () => {
    // Call your API to generate and download the full activity log
    // Example:
    // window.location.href = '/learning-hub/api/export'
    alert('Export feature is under construction')
  }

  return (
    <button
      onClick={handleExport}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Export All Activity Logs
    </button>
  )
}
