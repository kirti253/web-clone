export default function CorporateTraining() {
  return (
    <section className="w-full py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Image */}
          <div className="flex-shrink-0">
            <img 
              src="/corporate-training-professionals-discussion-team.jpg"
              alt="Corporate training session"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl font-bold text-red-600 mb-6">Corporate Training</h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Adore is known as one of the best corporate training company in india, specializing in HR solutions, consultation and leadership development training.
              </p>

              <p className="leading-relaxed">
                We have a passionate team who ensures effective and result from oriented learning life cycles for our clients through a systematic process of preparing annual learning calendar, learning needs analysis, creating content.
              </p>

              <p className="leading-relaxed">
                Encourage learning through practical interaction in workshops, simulation, coaching sessions and keep track on results regularly so that if required techniques can be modified.
              </p>

              <p className="leading-relaxed">
                Our committed Learning and OD experts are having rich experience from various industries and geographies across the world and delivered high end learning solutions and executed various OD interventions for several clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
