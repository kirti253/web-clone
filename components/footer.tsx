export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 text-lg">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Adore Technosoft is a leading IT solutions provider committed to delivering excellence in recruitment, training, and business solutions.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Solutions</a></li>
              <li><a href="#" className="hover:text-white transition">Recruitment</a></li>
              <li><a href="#" className="hover:text-white transition">Training</a></li>
              <li><a href="#" className="hover:text-white transition">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>📧 info@adoretechnosoft.com</li>
              <li>📱 +91 (0) XXX-XXX-XXXX</li>
              <li>📍 New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Adore Technosoft. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
