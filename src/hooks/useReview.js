import { useEffect, useState } from "react"

const useReview = () => {
    const [reviews, setReviews] = useState([])
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('reviews.json')
        .then(res=>res.json())
            .then(data => {
                setReviews(data);
                setLoading(false)
        })
    }, [])
    return [reviews,setReviews,loading,setLoading]
}
export default useReview;