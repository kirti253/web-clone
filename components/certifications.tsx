export default function Certifications() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Our <span className="text-red-600">Certifications</span>
        </h2>

        <div className="flex justify-center items-center gap-12 flex-wrap">
          {/* ISO 9001:2015 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full border-4 border-yellow-600 flex items-center justify-center bg-yellow-50 text-center p-4">
              <div className="text-center">
                <p className="font-bold text-sm text-yellow-700">ISO</p>
                <p className="text-xs text-yellow-700">9001:2015</p>
                <p className="text-xs text-yellow-700 mt-1">CERTIFIED</p>
              </div>
            </div>
          </div>

          {/* ISO 27001:2022 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full border-4 border-yellow-600 flex items-center justify-center bg-yellow-50 text-center p-4">
              <div className="text-center">
                <p className="font-bold text-sm text-yellow-700">ISO</p>
                <p className="text-xs text-yellow-700">27001:2022</p>
                <p className="text-xs text-yellow-700 mt-1">CERTIFIED</p>
              </div>
            </div>
          </div>

          {/* ISO 20000-1:2018 */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full border-4 border-yellow-600 flex items-center justify-center bg-yellow-50 text-center p-4">
              <div className="text-center">
                <p className="font-bold text-sm text-yellow-700">ISO</p>
                <p className="text-xs text-yellow-700">20000-1:2018</p>
                <p className="text-xs text-yellow-700 mt-1">CERTIFIED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
