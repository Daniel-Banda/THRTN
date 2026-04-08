'use client'

import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), {
  ssr: false,
})

export default function Scene3DClient(props: any) {
  return <Scene3D {...props} />
}
