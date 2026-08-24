interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-350 px-4.5 sm:px-5.5 md:px-7 lg:px-8 ${className}`}
    >
      {children}
    </div>
  )
}