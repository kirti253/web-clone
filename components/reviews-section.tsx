export default function ReviewsSection() {
  const reviews = [
    {
      text: 'At all times, we have found them highly responsive, attended to our needs and go that extra step in the process for us to ensure we stay satisfied, and we did come out smiling.',
      author: 'Rahul Chauhan',
    },
    {
      text: 'Their professional expertise, combined with their core industry knowledge and partnership approach, makes for a compelling business solution.',
      author: 'Karan Maheshwari',
    },
  ]

  return (
    <section className="py-16 px-6 bg-cyan-400">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          REVIEWS AND FEEDBACKS
        </h2>

        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded">
              <p className="text-cyan-400 text-xl font-serif mb-4">"{review.text}"</p>
              <p className="text-cyan-400 font-semibold text-lg">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
