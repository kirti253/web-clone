import React from 'react';
import { Monitor, Laptop, Smartphone, Headphones, Cable, Wifi, Wrench, Settings, CheckCircle, Award, Clock, Shield } from 'lucide-react';

// Updated SolutionsHero Component
const SolutionsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Complete IT Solutions & Services
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Premium IT Hardware, Accessories & Expert Repair Services Under One Roof
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            ✓ Genuine Products
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            ✓ Expert Technicians
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            ✓ Warranty Support
          </div>
        </div>
      </div>
    </section>
  );
};

// IT Hardware Products Component
const ITHardwareProducts = () => {
  const products = [
    {
      title: "Laptops",
      description: "Premium laptops from Dell, HP, Lenovo, ASUS, and Apple. Perfect for business, gaming, or everyday use.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
      features: ["Business Laptops", "Gaming Laptops", "Ultrabooks", "2-in-1 Convertibles"]
    },
    {
      title: "Desktops",
      description: "High-performance desktop computers. Custom builds available for specialized requirements.",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800",
      features: ["Workstations", "Gaming PCs", "All-in-One PCs", "Custom Builds"]
    },
    {
      title: "Mobiles",
      description: "Latest smartphones from Samsung, Apple, OnePlus, Xiaomi, and more flagship devices.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      features: ["Flagship Models", "Mid-Range Phones", "Budget Smartphones", "Latest Releases"]
    },
    {
      title: "Mobile Accessories",
      description: "Complete range of mobile accessories to enhance and protect your device.",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800",
      features: ["Cases & Covers", "Screen Protectors", "Chargers", "Power Banks"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">IT Hardware Solutions</h2>
          <p className="text-lg text-gray-600">Quality products from trusted brands at competitive prices</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{product.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Accessories & Connectivity Component
const AccessoriesConnectivity = () => {
  const accessories = [
    {
      icon: Cable,
      title: "Laptop Accessories",
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=600",
      items: ["Laptop Bags & Sleeves", "Keyboards & Mice", "Cooling Pads", "Docking Stations", "USB Hubs", "Webcams"]
    },
    {
      icon: Wifi,
      title: "Modems & Routers",
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=600",
      items: ["4G/5G Modems", "WiFi Routers", "Range Extenders", "Mesh WiFi Systems", "Network Switches"]
    },
    {
      icon: Cable,
      title: "Wires & Cables",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
      items: ["HDMI Cables", "USB Type-C Cables", "Network Cables", "Power Cables", "Audio Cables"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Accessories & Connectivity</h2>
          <p className="text-lg text-gray-600">Everything you need to enhance your tech experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {accessories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <category.icon className="w-8 h-8 text-white mr-3" />
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-green-500 mr-2 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Repair Services Component
const RepairServices = () => {
  const services = [
    {
      icon: Laptop,
      title: "Laptop Repair",
      description: "Expert laptop repair services for all brands. Quick turnaround with genuine parts.",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800",
      services: [
        "Screen Replacement",
        "Keyboard Repair",
        "Battery Replacement",
        "Motherboard Repair",
        "Hard Drive/SSD Upgrade",
        "Software Issues",
        "Virus Removal",
        "Data Recovery"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Repair",
      description: "Professional mobile repair with certified technicians. Same-day service available.",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800",
      services: [
        "Screen Replacement",
        "Battery Replacement",
        "Charging Port Repair",
        "Camera Repair",
        "Water Damage Repair",
        "Software Issues",
        "Speaker/Microphone Fix",
        "Back Glass Replacement"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3">
            <Wrench className="w-7 h-7 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Expert Repair Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Certified technicians with years of experience. Quality repairs with warranty coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <service.icon className="w-12 h-12 mb-2" />
                  <h3 className="text-3xl font-bold mb-1">{service.title}</h3>
                  <p className="text-blue-200 text-sm">{service.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-blue-600" />
                  Services Offered:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {service.services.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>✓ Free Diagnosis</span>
                  <span>✓ 90-Day Warranty</span>
                  <span>✓ Genuine Parts</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose Our Repair Services?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Award className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-3xl font-bold mb-1">5000+</div>
              <div className="text-blue-100 text-sm">Devices Repaired</div>
            </div>
            <div className="text-center">
              <Shield className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-blue-100 text-sm">Success Rate</div>
            </div>
            <div className="text-center">
              <Clock className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-3xl font-bold mb-1">24hrs</div>
              <div className="text-blue-100 text-sm">Avg Turnaround</div>
            </div>
            <div className="text-center">
              <CheckCircle className="w-10 h-10 mx-auto mb-3 opacity-90" />
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-blue-100 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Solutions Page
export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <SolutionsHero />
      <ITHardwareProducts />
      <AccessoriesConnectivity />
      <RepairServices />
    </main>
  );
}