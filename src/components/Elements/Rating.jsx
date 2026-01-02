export default function Rating({rating}) {

  // with arry with 5position fill value with false
  let ratingArray = Array(5).fill(false)

  // till rating i value change to true
  for(let i=0; i<rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <>
      {ratingArray.map((rate, index) =>
        <i key={index} className={`bi mr-1 text-lg ${rate ? "bi-star-fill" : "bi-star"} text-yellow-500`}></i>
      )}
    </>
  )
}
