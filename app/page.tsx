import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const versions = [
    {
      id: "v1",
      name: "Version 1 - Cyan/Blue",
      description: "Original design with cyan and blue color scheme",
      colors: ["#072C48", "#39B9EB", "#06B6D4"],
      href: "/v1"
    },
    {
      id: "v2",
      name: "Version 2 - Purple/Violet",
      description: "Elegant purple and violet color variant",
      colors: ["#4C1D95", "#8B5CF6", "#A855F7"],
      href: "/v2"
    },
    {
      id: "v3",
      name: "Version 3 - Green/Emerald",
      description: "Fresh green and emerald color theme",
      colors: ["#064E3B", "#10B981", "#059669"],
      href: "/v3"
    },
    {
      id: "v4",
      name: "Version 4 - Orange/Amber",
      description: "Warm orange and amber color palette",
      colors: ["#92400E", "#F59E0B", "#D97706"],
      href: "/v4"
    },
    {
      id: "v5",
      name: "Version 5 - Rose Gold/Pink",
      description: "Luxury rose gold and pink color scheme",
      colors: ["#881337", "#F43F5E", "#EC4899"],
      href: "/v5"
    },
    {
      id: "v6",
      name: "Version 6 - Midnight Blue/Indigo",
      description: "Professional midnight blue and indigo theme",
      colors: ["#1E1B4B", "#6366F1", "#8B5CF6"],
      href: "/v6"
    },
    {
      id: "v7",
      name: "Version 7 - Charcoal/Lime",
      description: "Modern charcoal and lime color palette",
      colors: ["#374151", "#84CC16", "#22C55E"],
      href: "/v7"
    },
    {
      id: "v8",
      name: "Version 8 - Ocean Blue/Turquoise",
      description: "Fresh ocean blue and turquoise theme",
      colors: ["#0C4A6E", "#0EA5E9", "#06B6D4"],
      href: "/v8"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image 
              src="/logo2.png" 
              alt="AccsMarket Logo" 
              width={80} 
              height={80} 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AccsMarket Design Variants
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from different color themes for the AccsMarket platform. Each version maintains the same functionality with unique visual styling.
          </p>
        </div>

        {/* Version Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {versions.map((version) => (
            <Link
              key={version.id}
              href={version.href}
              className="group block"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group-hover:-translate-y-1">
                {/* Default Badge for V1 */}
                {version.id === 'v1' && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Varsayılan
                  </div>
                )}
                
                {/* Color Palette Preview */}
                <div className="flex gap-3 mb-6">
                  {version.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-xl shadow-md"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Version Info */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700">
                  {version.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {version.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  <span>View Design</span>
                  <svg 
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            © 2024 AccsMarket. All design variants showcase the same premium social media marketplace.
          </p>
        </div>
      </div>
    </main>
  );
}
