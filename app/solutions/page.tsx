"use client"

import { useState } from "react"
import {
  Laptop,
  Smartphone,
  Cable,
  Wrench,
  Settings,
  CheckCircle,
  Award,
  Clock,
  Shield,
  X,
  ShoppingCart,
} from "lucide-react"

// Product data for all categories
const PRODUCT_DATA = {
  laptops: [
    {
      id: 1,
      name: "Dell XPS 13",
      price: 94999,
      image: "/Dell XPS 13.jpeg",
      brand: "Dell",
      specs: "Intel i5, 8GB RAM, 512GB SSD",
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: 102999,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
      brand: "Apple",
      specs: "M2 Chip, 8GB RAM, 256GB SSD",
    },
    {
      id: 3,
      name: "HP Pavilion 15",
      price: 54999,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
      brand: "HP",
      specs: "Ryzen 5, 8GB RAM, 256GB SSD",
    },
    {
      id: 4,
      name: "Lenovo ThinkPad",
      price: 71999,
      image: "/Lenova.jpg",
      brand: "Lenovo",
      specs: "Intel i7, 16GB RAM, 512GB SSD",
    },
    {
      id: 5,
      name: "ASUS VivoBook",
      price: 51999,
      image: "/vivobook.jpg",
      brand: "ASUS",
      specs: "Ryzen 7, 8GB RAM, 256GB SSD",
    },
    {
      id: 6,
      name: "MSI GE66 Gaming",
      price: 126999,
      image: "/MSI GE66 Gaming.jpeg",
      brand: "MSI",
      specs: "RTX 3070, i7, 16GB, 512GB",
    },
    {
      id: 7,
      name: "Acer Swift 3",
      price: 63999,
      image: "/Acer Swift 3.jpg",
      brand: "Acer",
      specs: "Intel i5, 8GB RAM, 512GB SSD",
    },
    {
      id: 8,
      name: "Surface Laptop 5",
      price: 79999,
      image: "/Surface Laptop 5.jpg",
      brand: "Microsoft",
      specs: "Intel i5, 8GB RAM, 512GB SSD",
    },
    {
      id: 9,
      name: "Dell Inspiron 15",
      price: 43999,
      image: "/Dell Inspiron 15.jpg",
      brand: "Dell",
      specs: "Intel i5, 4GB RAM, 256GB SSD",
    },
    {
      id: 10,
      name: "Razer Blade 14",
      price: 142999,
      image: "/Razer Blade 14.webp",
      brand: "Razer",
      specs: "RTX 3060, i7, 16GB, 512GB",
    },
  ],
  desktops: [
    {
      id: 1,
      name: 'iMac 24" M5',
      price: 102999,
      image: "/IMac 24.jpeg",
      brand: "Apple",
      specs: "M1 Chip, 8GB, 256GB",
    },
    {
      id: 2,
      name: "Dell XPS Desktop",
      price: 141999,
      image: "/Dell XPS Desktop.jpeg",
      brand: "Dell",
      specs: "Intel i7, 16GB RAM, 512GB SSD",
    },
    {
      id: 3,
      name: "ASUS ROG PC",
      price: 173999,
      image: "/ASUS ROG PC.png",
      brand: "ASUS",
      specs: "RTX 3080, i9, 32GB, 1TB",
    },
    {
      id: 4,
      name: "HP Pavilion Desktop",
      price: 54999,
      image: "/HP Pavilion Desktop.webp",
      brand: "HP",
      specs: "Ryzen 5, 8GB RAM, 256GB SSD",
    },
    {
      id: 5,
      name: "Lenovo ThinkCentre",
      price: 67999,
      image: "/Lenovo ThinkCentre.avif",
      brand: "Lenovo",
      specs: "Intel i5, 8GB RAM, 512GB SSD",
    },
    {
      id: 6,
      name: "MSI Trident 3",
      price: 79999,
      image: "/MSI Trident 3.jpeg",
      brand: "MSI",
      specs: "RTX 3060, i5, 16GB, 512GB",
    },
    {
      id: 7,
      name: "Corsair One PC",
      price: 197999,
      image: "/Corsair One PC.jpeg",
      brand: "Corsair",
      specs: "RTX 3080 Ti, i9, 32GB",
    },
    {
      id: 8,
      name: "Acer Aspire",
      price: 59999,
      image: "/Acer Aspire.jpg",
      brand: "Acer",
      specs: "Ryzen 7, 16GB RAM, 512GB",
    },
    {
      id: 9,
      name: "Alienware Aurora",
      price: 157999,
      image: "/Alienware Aurora.jpeg",
      brand: "Alienware",
      specs: "RTX 3070, i7, 16GB, 512GB",
    },
    {
      id: 10,
      name: "Noctua PC Build",
      price: 126999,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
      brand: "Custom",
      specs: "RTX 3060, i7, 16GB, 1TB",
    },
  ],
  mobiles: [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 79999,
      image: "/iPhone 15 Pro.jpeg",
      brand: "Apple",
      specs: 'A17 Pro, 256GB, 6.1" OLED',
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 71999,
      image: "/Samsung Galaxy S24.jpeg",
      brand: "Samsung",
      specs: "Snapdragon 8 Gen 3, 256GB",
    },
    {
      id: 3,
      name: "OnePlus 12",
      price: 51999,
      image: "/OnePlus.jpeg",
      brand: "OnePlus",
      specs: "Snapdragon 8 Gen 3, 256GB",
    },
    {
      id: 4,
      name: "Google Pixel 8",
      price: 63999,
      image: "/Google Pixel 8.jpeg",
      brand: "Google",
      specs: 'Tensor G3, 128GB, 6.3" OLED',
    },
    {
      id: 5,
      name: "Xiaomi 14",
      price: 35999,
      image: "/Xiaomi 14.jpg",
      brand: "Xiaomi",
      specs: "Snapdragon 8 Gen 3, 256GB",
    },
    {
      id: 6,
      name: "Samsung Galaxy A54",
      price: 35999,
      image: "/Samsung Galaxy A54.jpeg",
      brand: "Samsung",
      specs: 'Exynos 1380, 128GB, 6.4"',
    },
    {
      id: 7,
      name: "iPhone 15",
      price: 63999,
      image: "/iPhone 15.jpg",
      brand: "Apple",
      specs: 'A16 Bionic, 128GB, 6.1"',
    },
    {
      id: 8,
      name: "Motorola Edge 50",
      price: 31999,
      image: "/Motorola Edge 50.jpg",
      brand: "Motorola",
      specs: 'Snapdragon 7, 256GB, 6.5"',
    },
    {
      id: 9,
      name: "Sony Xperia 1 V",
      price: 87999,
      image: "/Sony Xperia 1 V.webp",
      brand: "Sony",
      specs: "Snapdragon 8 Gen 2, 256GB",
    },
    {
      id: 10,
      name: "Nothing Phone 2",
      price: 39999,
      image: "/Nothing Phone 2.jpeg",
      brand: "Nothing",
      specs: "Snapdragon 8+ Gen 1, 256GB",
    },
  ],
  accessories: [
    {
      id: 1,
      name: "HDMI 2.1 Cable 3M",
      price: 899,
      image: "/HDMI 2.1 Cable 3M.jpeg",
      brand: "Belkin",
      specs: "4K Support, High-Speed",
    },
    {
      id: 2,
      name: "USB-C Cable 2M",
      price: 599,
      image: "/USB-C Cable 2M.webp",
      brand: "Baseus",
      specs: "Fast Charge, Durable",
    },
    {
      id: 3,
      name: "Network Ethernet Cable",
      price: 399,
      image: "/Network Ethernet Cab.jpeg",
      brand: "TP-Link",
      specs: "Cat 6, 10M Length",
    },
    {
      id: 4,
      name: "WiFi 6 Router",
      price: 4999,
      image: "/WiFi 6 Router.jpg",
      brand: "TP-Link",
      specs: "AX1500, Dual Band",
    },
    {
      id: 5,
      name: "4G LTE Modem",
      price: 2999,
      image: "/4G LTE Modem.jpg",
      brand: "Huawei",
      specs: "Plug & Play, Portable",
    },
    {
      id: 6,
      name: "WiFi Mesh System",
      price: 7999,
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=500&h=500&fit=crop",
      brand: "ASUS",
      specs: "3-Pack, Whole Home",
    },
    {
      id: 7,
      name: "Network Switch 8 Port",
      price: 1999,
      image: "/Network Switch 8 Port.jpeg",
      brand: "D-Link",
      specs: "Gigabit, 10/100/1000",
    },
    {
      id: 8,
      name: "Range Extender WiFi",
      price: 2499,
      image: "/Range Extender WiFi.webp",
      brand: "Netgear",
      specs: "300Mbps, AC1200",
    },
    {
      id: 9,
      name: "Power Cable Extension",
      price: 399,
      image: "/Power Cable Extension.jpg",
      brand: "Philips",
      specs: "3 Socket, 5M Cable",
    },
    {
      id: 10,
      name: "Audio Cables Bundle",
      price: 799,
      image: "/Audio Cables Bundle.jpeg",
      brand: "Sony",
      specs: "3.5mm, RCA, Optical",
    },
  ],
  repairs: [
    {
      id: 1,
      name: "Laptop Screen Replacement",
      price: 8999,
      image: "/Laptop Keyboard.jpeg",
      brand: "Professional Service",
      specs: "All Brands, 1 Day Turnaround",
    },
    {
      id: 2,
      name: "Laptop Battery Replacement",
      price: 4999,
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
      brand: "Professional Service",
      specs: "Genuine Parts, Warranty",
    },
    {
      id: 3,
      name: "Laptop Keyboard Repair",
      price: 3999,
      image: "/laptop keyboard replacement.jpeg",
      brand: "Professional Service",
      specs: "Key Replacement, Cleaning",
    },
    {
      id: 4,
      name: "Motherboard Repair",
      price: 12999,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
      brand: "Professional Service",
      specs: "Soldering, Component Repair",
    },
    {
      id: 5,
      name: "SSD/HDD Data Recovery",
      price: 7999,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
      brand: "Professional Service",
      specs: "98% Success Rate",
    },
    {
      id: 6,
      name: "Laptop Screen Repair",
      price: 6999,
      image: "/Laptop Screen Repair.webp",
      brand: "Professional Service",
      specs: "Original Glass, Same Day",
    },
    {
      id: 7,
      name: "Laptop Battery Replacement",
      price: 2999,
      image: "battery repair.jpeg",
      brand: "Professional Service",
      specs: "Genuine Battery, Warranty",
    },
    {
      id: 8,
      name: "Water Damage Repair",
      price: 9999,
      image: "/Water Damage Repair.jpeg",
      brand: "Professional Service",
      specs: "Cleaning, Component Fix",
    },
    {
      id: 9,
      name: "Charging Port Repair",
      price: 4499,
      image: "/Charging Port Repair.jpeg",
      brand: "Professional Service",
      specs: "Port Replacement, Testing",
    },
    {
      id: 10,
      name: "Camera Repair Service",
      price: 5999,
      image: "/Camera Repair Service.jpeg",
      brand: "Professional Service",
      specs: "Front & Rear, Quality Check",
    },
  ],
  mobileAccessories: [
    {
      id: 1,
      name: "Premium Phone Case",
      price: 899,
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=500&fit=crop",
      brand: "Spigen",
      specs: "Shock-Proof, Clear Design",
    },
    {
      id: 2,
      name: "Tempered Glass Screen Protector",
      price: 499,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      brand: "NILLKIN",
      specs: "9H Hardness, Anti-Scratch",
    },
    {
      id: 3,
      name: "Fast Charging Adapter 65W",
      price: 1499,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
      brand: "Anker",
      specs: "Quick Charge 4.0, Compact",
    },
    {
      id: 4,
      name: "Power Bank 20000mAh",
      price: 1999,
      image: "https://images.unsplash.com/photo-1591060176046-fcf12d6e4a64?w=500&h=500&fit=crop",
      brand: "Mi",
      specs: "Dual USB, LED Display",
    },
    {
      id: 5,
      name: "Wireless Charging Pad",
      price: 1299,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop",
      brand: "Belkin",
      specs: "10W Fast Charging, Compact",
    },
    {
      id: 6,
      name: "USB-C Charging Cable 2M",
      price: 599,
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
      brand: "Baseus",
      specs: "Braided, Durable",
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      price: 2499,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      brand: "JBL",
      specs: "Waterproof, 12W Speaker",
    },
    {
      id: 8,
      name: "Phone Ring Stand",
      price: 399,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      brand: "Generic",
      specs: "360° Rotation, Magnetic",
    },
    {
      id: 9,
      name: "Screen Cleaning Kit",
      price: 299,
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=500&fit=crop",
      brand: "Microfiber",
      specs: "Anti-Static, Lint-Free",
    },
    {
      id: 10,
      name: "Phone Pop Socket",
      price: 349,
      image: "https://images.unsplash.com/photo-1511693789497-ed1d8aae9cb0?w=500&h=500&fit=crop",
      brand: "PopSocket",
      specs: "Expandable, Multiple Colors",
    },
  ],
  laptopAccessories: [
    {
      id: 1,
      name: "Laptop Backpack Pro",
      price: 2499,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      brand: "Targus",
      specs: "Water-Resistant, 17 inch",
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: 1299,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
      brand: "Logitech",
      specs: "2.4GHz, 18 Month Battery",
    },
    {
      id: 3,
      name: "Mechanical Keyboard RGB",
      price: 3999,
      image: "https://images.unsplash.com/photo-1587829191301-755f88d2c69b?w=500&h=500&fit=crop",
      brand: "Corsair",
      specs: "Cherry MX Switches, Backlit",
    },
    {
      id: 4,
      name: "Laptop Cooling Pad",
      price: 1999,
      image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=500&fit=crop",
      brand: "HAVIT",
      specs: "5 Fan, USB Powered",
    },
    {
      id: 5,
      name: "USB-C Docking Station",
      price: 4499,
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
      brand: "Anker",
      specs: "7-in-1, 100W Power Delivery",
    },
    {
      id: 6,
      name: 'Laptop Screen Protector 15.6"',
      price: 1499,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      brand: "3M",
      specs: "Blue Light Filter, Anti-Glare",
    },
    {
      id: 7,
      name: "USB-C Hub Adapter",
      price: 1899,
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop",
      brand: "Baseus",
      specs: "5 Port, Multi-Device Support",
    },
    {
      id: 8,
      name: "Laptop Stand Aluminum",
      price: 1599,
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=500&fit=crop",
      brand: "Rain Design",
      specs: "Adjustable, Ergonomic Design",
    },
    {
      id: 9,
      name: "Webcam 1080P HD",
      price: 2999,
      image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop",
      brand: "Logitech",
      specs: "Auto Focus, Built-in Mic",
    },
    {
      id: 10,
      name: "Laptop Sleeve Case",
      price: 899,
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
      brand: "Tomtoc",
      specs: "Neoprene, 15.6 inch Compatible",
    },
  ],
}

// Product Card Component
const ProductCard = ({ product, onAddCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
        <p className="text-xs text-gray-600 mb-3">{product.specs}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">₹{product.price.toLocaleString("en-IN")}</span>
          <button
            onClick={() => onAddCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-200"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Product List Modal Component
const ProductListModal = ({ category, products, onClose }) => {
  const categoryNames = {
    laptops: "Laptops",
    desktops: "Desktops",
    mobiles: "Smartphones",
    accessories: "Cables, Routers & Connectivity",
    repairs: "Repair Services",
    mobileAccessories: "Mobile Accessories",
    laptopAccessories: "Laptop Accessories",
  }

  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  const handleAddCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-7xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold">{categoryNames[category]}</h2>
          <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-lg transition-colors duration-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="p-6">
          {showCart ? (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shopping Cart ({cartItems.length} items)</h3>
              {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty</p>
              ) : (
                <div className="space-y-2">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">₹{item.price.toLocaleString("en-IN")}</p>
                      </div>
                    </div>
                  ))}
                  <div className="bg-blue-50 p-4 rounded-lg mt-4">
                    <p className="text-lg font-bold text-gray-900">
                      Total: ₹{cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              )}
              <button
                onClick={() => setShowCart(false)}
                className="mt-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Back to Products
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} onAddCart={handleAddCart} />
                ))}
              </div>
              {cartItems.length > 0 && (
                <button
                  onClick={() => setShowCart(true)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  View Cart ({cartItems.length})
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// Solutions Hero Component
const SolutionsHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 px-4">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete IT Solutions & Services</h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Premium IT Hardware, Accessories & Expert Repair Services Under One Roof
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">✓ Genuine Products</div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">✓ Expert Technicians</div>
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">✓ Warranty Support</div>
        </div>
      </div>
    </section>
  )
}

// IT Hardware Products Component
const ITHardwareProducts = ({ onSelectCategory }) => {
  const products = [
    {
      title: "Laptops",
      description:
        "Premium laptops from Dell, HP, Lenovo, ASUS, and Apple. Perfect for business, gaming, or everyday use.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
      features: ["Business Laptops", "Gaming Laptops", "Ultrabooks", "2-in-1 Convertibles"],
      categoryKey: "laptops",
    },
    {
      title: "Desktops",
      description: "High-performance desktop computers. Custom builds available for specialized requirements.",
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=800",
      features: ["Workstations", "Gaming PCs", "All-in-One PCs", "Custom Builds"],
      categoryKey: "desktops",
    },
    {
      title: "Mobiles",
      description: "Latest smartphones from Samsung, Apple, OnePlus, Xiaomi, and more flagship devices.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
      features: ["Flagship Models", "Mid-Range Phones", "Budget Smartphones", "Latest Releases"],
      categoryKey: "mobiles",
    },
    {
      title: "Mobile Accessories",
      description: "Complete range of mobile accessories to enhance and protect your device.",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=800",
      features: ["Cases & Covers", "Screen Protectors", "Chargers", "Power Banks"],
      categoryKey: "mobileAccessories",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">IT Hardware Solutions</h2>
          <p className="text-lg text-gray-600">Click on any category to see 10 products with pricing</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => onSelectCategory(product.categoryKey)}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// Accessories & Connectivity Component
const AccessoriesConnectivity = ({ onSelectCategory }) => {
  const accessories = [
    {
      icon: Cable,
      title: "Cables, Routers & Connectivity",
      image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=600&h=400&fit=crop",
      items: [
        "HDMI & USB Cables",
        "Network Cables",
        "WiFi Routers",
        "4G/5G Modems",
        "Range Extenders",
        "Network Switches",
      ],
      categoryKey: "accessories",
    },
    {
      icon: Laptop,
      title: "Laptop Accessories",
      image: "https://images.unsplash.com/photo-1587829191301-755f88d2c69b?w=600&h=400&fit=crop",
      items: [
        "Laptop Bags & Backpacks",
        "Keyboards & Mice",
        "Cooling Pads",
        "Docking Stations",
        "USB Hubs",
        "Laptop Stands",
      ],
      categoryKey: "laptopAccessories",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Accessories & Connectivity</h2>
          <p className="text-lg text-gray-600">Click to see 10 products with pricing</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {accessories.map((category, index) => (
            <button
              key={index}
              onClick={() => onSelectCategory(category.categoryKey)}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 text-left cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// Repair Services Component
const RepairServices = ({ onSelectCategory }) => {
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
      ],
      categoryKey: "repairs",
      serviceType: "laptop",
    },
    {
      icon: Smartphone,
      title: "Mobile Repair",
      description: "Professional mobile repair with certified technicians. Same-day service available.",
      image: "https://images.unsplash.com/photo-1621905251918-419cd12efd1e?w=800",
      services: [
        "Screen Replacement",
        "Battery Replacement",
        "Charging Port Repair",
        "Camera Repair",
        "Water Damage Repair",
        "Software Issues",
      ],
      categoryKey: "repairs",
      serviceType: "mobile",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-3">
            <Wrench className="w-7 h-7 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Expert Repair Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Certified technicians with years of experience. Click to see services with pricing.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="relative h-56 overflow-hidden cursor-pointer group"
                onClick={() => onSelectCategory("repairs")}
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                <button
                  onClick={() => onSelectCategory("repairs")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
                >
                  View All Services & Pricing
                </button>
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
  )
}

// Main Solutions Page
export default function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <main className="min-h-screen bg-white">
      <SolutionsHero />
      <ITHardwareProducts onSelectCategory={setSelectedCategory} />
      <AccessoriesConnectivity onSelectCategory={setSelectedCategory} />
      <RepairServices onSelectCategory={setSelectedCategory} />
      {selectedCategory && (
        <ProductListModal
          category={selectedCategory}
          products={PRODUCT_DATA[selectedCategory]}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </main>
  )
}
