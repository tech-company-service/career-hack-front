import React, { CSSProperties } from 'react'

interface CustomModalProps {
  isOpen: boolean
  content: React.ReactNode
  onRequestClose: () => void
  position?: { x: number; y: number }
  style?: CSSProperties
  ariaHideApp: boolean
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  content,
  onRequestClose,
  position,
  style,
}) => {
  if (!isOpen) return null

  const modalStyle: React.CSSProperties = position
    ? {
        position: 'fixed',
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: 'translate(-50%, 0)',
        maxWidth: '90%',
        zIndex: 50,
      }
    : style ?? {}

  return (
    <div style={modalStyle} className='bg-black bg-opacity-50 p-4 rounded shadow-lg'>
      <div className='whitespace-pre-line bg-white p-4 rounded'>{content}</div>
    </div>
  )
}

export default CustomModal
