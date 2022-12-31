import {useRouter} from "next/router"

export default function ProductReviewShow() {
  const router = useRouter()
  const {productId, reviewId} = router.query
  return (
    <div>
      <h1>/product/{productId}/review/{reviewId}</h1>
      <h1>Product router</h1>
    </div>
  )
}
