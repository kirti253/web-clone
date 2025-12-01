import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 text-lg">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Savekey Technology is a leading IT solutions provider committed to
              delivering excellence in recruitment, training, and business
              solutions.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="/solutions" className="hover:text-white transition">
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#it-hardware"
                  className="hover:text-white transition"
                >
                  IT Hardware
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#accessories-connectivity"
                  className="hover:text-white transition"
                >
                  Accessories & Connectivity
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions#repair-services"
                  className="hover:text-white transition"
                >
                  Expert Repair Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-white transition">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>📧 info@savekeytechnology.com</li>
              <li>📱 +91 (0) XXX-XXX-XXXX</li>
              <li>📍 New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; 2025 Savekey Technology. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
