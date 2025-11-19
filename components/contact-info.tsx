export default function ContactInfo() {
  return (
    <div className="space-y-12">
      {/* Map Section */}
      <div className="rounded-lg overflow-hidden shadow-lg h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8987449062697!2d77.06305!3d28.45595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d0e1234567%3A0x1234567890abcdef!2sAdore%20Technosoft!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Address Details */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-3">Registered Address:</h3>
          <p className="text-gray-700">
            <strong>New Delhi:</strong> Onward Coworx Private Limited, E-44/3, Ground Floor, Okhla Industrial Area, Phase-II, South Delhi, New Delhi - 110020
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Corporate Address:</h3>
          <p className="text-gray-700">
            <strong>Noida:</strong> Alpathum, Unit No: 11-15, 1st Floor, Tower-B, Sector-90, Noida-201305
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Branch Addresses:</h3>
          <div className="space-y-3 text-gray-700">
            <p><strong>Mumbai:</strong> Carnival House, Off. AK Vaidya Marg, Malad East Mumbai - 400097</p>
            <p><strong>Bengaluru:</strong> GoodWorks Infinity Park, 92/A, 2nd Main Road Electronics City Phase 1, Bengaluru - 560100</p>
            <p><strong>Hyderabad:</strong> Viunite, 8-2-630/B/B/1, Mount Banjara Complex Road No. 12, Banjara Hills, Hyderabad - 500034</p>
            <p><strong>Chennai:</strong> Disruptors of Tomorrow Coworking, Plot No. 87 1st Floor, 4th Cross Street, Thirumalai Nagar, Perunqudi Chennai - 600096</p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
          <h3 className="text-xl font-bold mb-3">REACH OUT NOW!</h3>
          <p className="text-blue-600 font-bold text-lg mb-4">+91 9810980736 | +91 9810982503</p>
          <p className="text-gray-700 mb-2"><strong>For Sales:</strong> sales@adoretechnosoft.com</p>
          <p className="text-gray-700"><strong>For HR:</strong> hr@adoretechnosoft.com</p>
        </div>
      </div>
    </div>
  )
}
