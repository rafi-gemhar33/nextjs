import {useRouter} from "next/router"

export default function ProductShow() {
  const router = useRouter()
  return (
    <div>
      <h1>/product/{router.query.productId}</h1>
      <h1>Product router</h1>
    </div>
  )
}
