export default function ProfessionalTraining() {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Professional Training</h2>
            
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Adore's motive is to keep your professional network healthy for you.
              </p>

              <p className="leading-relaxed">
                We ensure to follow excellent practices in three areas of professional training where we focus on building your professional network by joining professional associations and affiliate you with professional certifications, which will showcase current and new skillsets as part of an influential career and network-building strategy.
              </p>

              <p className="leading-relaxed">
                It will help you in maximizing a positive virtual career presence to ensure successful career growth.
              </p>

              <p className="leading-relaxed">
                Developing your universal proficiency and healthy attitude, building up your skills and confidence wherein our professional training will increase your knowledge of team, project, and will boost your job satisfaction.
              </p>

              <p className="leading-relaxed">
                At Adore Technosoft, our trainers do check in regularly on you and communicate your desire to help them build a long-term career. Giving high-potential team members challenging "stretch assignments" along with on-going professional development and skill-building opportunities is a winning combination for improved retention.
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-shrink-0">
            <img 
              src="/professional-meeting-business-discussion-conferenc.jpg"
              alt="Professional training session"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
