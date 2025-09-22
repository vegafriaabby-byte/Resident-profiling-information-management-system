import "./DirectoryPage.css"

const DirectoryPage = () => {
  const residents = [
    { id: 1, name: "Alice Smith", unit: "Unit 101", image: "/professional-woman-diverse.png" },
    { id: 2, name: "Bob Johnson", unit: "Unit 203", image: "/smiling-man.png" },
    { id: 3, name: "Charlie Brown", unit: "Unit 305", image: "/friendly-person.jpg" },
    { id: 4, name: "Diana Miller", unit: "Unit 407", image: "/professional-woman-diverse.png" },
    { id: 5, name: "Eve Davis", unit: "Unit 509", image: "/woman-portrait.png" },
    { id: 6, name: "Frank White", unit: "Unit 611", image: "/thoughtful-man-portrait.png" },
    { id: 7, name: "Grace Taylor", unit: "Unit 713", image: "/diverse-woman-smiling.png" },
    { id: 8, name: "Henry Moore", unit: "Unit 815", image: "/elderly-man-contemplative.png" },
    { id: 9, name: "Ivy Clark", unit: "Unit 917", image: "/young-woman-smiling.png" },
    { id: 10, name: "Jack Lewis", unit: "Unit 1019", image: "/middle-aged-man-contemplative.png" },
  ]

  return (
    <div className="directory-page">
      <div className="directory-container">
        <div className="directory-header">
          <h1 className="directory-title">Community Resident Directory</h1>
          <p className="directory-subtitle">
            Discover and connect with your neighbors in ResidentConnect. Find contact information and unit details for
            every resident in our community.
          </p>

          <div className="search-container">
            <input type="text" placeholder="Search residents by name or unit..." className="search-input" />
            <button className="search-btn">Search</button>
          </div>
        </div>

        <div className="residents-grid">
          {residents.map((resident) => (
            <div key={resident.id} className="resident-card">
              <img src={resident.image || "/placeholder.svg"} alt={resident.name} className="resident-image" />
              <h3 className="resident-name">{resident.name}</h3>
              <p className="resident-unit">{resident.unit}</p>
              <button className="view-profile-btn">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DirectoryPage
