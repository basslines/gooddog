const reviews = [
  {
    name: "Sarah M.",
    role: "Owner of Max, Golden Retriever",
    text: "After just 5 sessions, Max completely stopped pulling on the leash. The trainer was incredibly patient and taught me exactly how to maintain the progress. Best investment we've made for our dog.",
    stars: 5,
  },
  {
    name: "Ahmed K.",
    role: "Owner of Luna, German Shepherd",
    text: "Luna had severe separation anxiety and reactivity. The behavioral modification program was a game changer. She's a completely different dog now — calm, confident, and happy.",
    stars: 5,
  },
  {
    name: "Jessica T.",
    role: "Owner of Bruno, rescue Labrador",
    text: "We adopted Bruno from a shelter and he was terrified of everything. The trauma recovery training was so gentle and effective. He's now playful and trusting. Can't thank the team enough.",
    stars: 5,
  },
  {
    name: "Omar R.",
    role: "First-time dog owner",
    text: "As a complete beginner, I was overwhelmed. The new owner consultation gave me everything I needed — feeding, equipment, routine, vaccinations. I felt genuinely prepared and confident.",
    stars: 5,
  },
  {
    name: "Fatima H.",
    role: "Owner of Bella & Coco",
    text: "We have two dogs and the multi-dog discount was a great bonus. Both dogs attended together and the results were outstanding. Highly recommend the 10-session package.",
    stars: 5,
  },
  {
    name: "Daniel P.",
    role: "Owner of Rocky, Border Collie",
    text: "The live-in 20-day program was absolutely worth it. Rocky came back completely transformed — attentive, calm, and responsive. The trainer's follow-up sessions made sure everything stuck.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-green-mid">Client Stories</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-green-dark mt-3 mb-4">
            What Dog Owners Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Real results from real families across Dubai and the UAE.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 rounded-full bg-green-mid" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#faf8f3] rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200"
            >
              <StarRating count={review.stars} />
              <p className="text-gray-700 text-sm leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-green-dark text-sm">{review.name}</div>
                <div className="text-gray-400 text-xs mt-0.5">{review.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-4 bg-[#faf8f3] border border-gray-200 rounded-2xl px-8 py-5">
            <div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-1">5.0 · 50+ reviews</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-sm text-gray-600 font-medium">
              Certified Professional<br />Dog Trainers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
