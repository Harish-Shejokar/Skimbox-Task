import React from 'react'
import { useRouter } from 'next/router'
const docs = () => {
    const router = useRouter();
    const {parmas = []} = router.query;
    console.log(parmas);

  return (
    <div>
      Docs Page
    </div>
  )
}

export default docs
