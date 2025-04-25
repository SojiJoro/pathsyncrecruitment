import { roles } from '@/data/roles'

export async function generateStaticParams() {
  return roles.map((role) => ({ role: role.slug }))
}
