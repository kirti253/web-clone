export default function TechnologySolutions() {
  const solutions = [
    {
      name: 'SAP',
      description: 'SAP has emerged as one of the best ERP system for any business. SAP provides data-driven solutions which is related to human resource, production, finance, materials management & sales operations, workflow'
    },
    {
      name: 'Microsoft Dynamics',
      description: 'Microsoft Dynamics is an enterprise resource planning (ERP) and customer relationship management (CRM) software application. It comprises a different market segments, ranging from Dynamics GP for SMBs'
    },
    {
      name: 'ORACLE',
      description: 'Oracle ERP is a cloud-based software solution used to automate back office processes a software application. It comprises of different market segments, ranging from Dynamics GP for SMBs to Dynamics.'
    }
  ]

  return (
    <section className="py-20 bg-red-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-red-600 text-white">
              <h3 className="text-2xl font-bold mb-6">{solution.name}</h3>
              <div className="mb-8 h-24 flex items-center justify-center">
                <img 
                  src={`/.jpg?height=80&width=200&query=${solution.name}%20logo`}
                  alt={solution.name}
                  className="max-h-20 object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed mb-8">
                {solution.description}
              </p>
              <button className="bg-white text-red-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
