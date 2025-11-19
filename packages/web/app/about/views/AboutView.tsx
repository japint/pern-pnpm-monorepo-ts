export default function AboutView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to our PERN stack monorepo application built with modern best
          practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Our Stack
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              <strong>PostgreSQL</strong> - Powerful database
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              <strong>Express</strong> - Fast backend API
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              <strong>React/Next.js</strong> - Modern frontend
            </li>
            <li className="flex items-center">
              <span className="text-blue-600 mr-2">✓</span>
              <strong>Node.js</strong> - JavaScript runtime
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Technologies
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              TypeScript for type safety
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              Tailwind CSS for styling
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              pnpm monorepo structure
            </li>
            <li className="flex items-center">
              <span className="text-green-600 mr-2">✓</span>
              Separation of Concerns
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">
          Our Mission
        </h3>
        <p className="text-blue-800">
          Building scalable, maintainable applications with modern architecture
          patterns and best practices. We focus on code quality, developer
          experience, and long-term sustainability.
        </p>
      </div>
    </div>
  );
}
