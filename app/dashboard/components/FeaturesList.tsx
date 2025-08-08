const fiturDashboard = [
  'Upload & Restore Foto',
  'Manajemen Preset AI',
  'Template Editing',
  'Pembuatan Splash Screen',
  'Pembuatan Logo & Banner',
]

export default function FeaturesList() {
  return (
    <ul style={{ paddingLeft: '20px', fontSize: '1.1rem' }}>
      {fiturDashboard.map((fitur, i) => (
        <li key={i} style={{ marginBottom: '12px' }}>{fitur}</li>
      ))}
    </ul>
  )
}
