interface WaveDividerProps {
  fill?: string
  className?: string
  flip?: boolean
}

export default function WaveDivider({ fill = '#F8FAFC', className = '', flip = false }: WaveDividerProps) {
  return (
    <div className={`wave-divider ${className}`} style={flip ? { transform: 'scaleY(-1)' } : {}}>
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
