'use client'

import React from 'react'
import AdminBackdateForm from '@/components/AdminBackdateForm'
import ActivityExportButton from '@/components/ActivityExportButton'

export default function LogsPage() {
  return (
    <div className="space-y-6 p-4">
      <h1 className="text-2xl font-bold">Activity Logs</h1>
      <AdminBackdateForm />
      <ActivityExportButton />
    </div>
  )
}
