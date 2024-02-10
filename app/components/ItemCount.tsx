import React from 'react'

interface ItemCountProps {
  count: number
  label: string
}

const ItemCount: React.FC<ItemCountProps> = ({ count, label }) => {
  return (
    <div className='text-lg text-gray-800'>
      {label}: {count}件
    </div>
  )
}

export default ItemCount
