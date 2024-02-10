import Link from 'next/link'
import React from 'react'

const Custom404 = () => {
  return (
    <div>
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しないか、移動した可能性があります。</p>
      <Link href='/'>
        <a>ホームページに戻る</a>
      </Link>
    </div>
  )
}

export default Custom404
