import { useState } from "react"
import "./DirectoryPage.css"
import ProfilePage from "./ProfilePage"

const residents = [
  {
    name: "Olivia Chen",
    unit: "Unit 305",
    email: "olivia.chen@example.com",
    phone: "(555) 123-4567",
    emergency: "Daniel Chen ((555) 987-6543)",
    notes: "Software engineer, active in community events.",
    image: "/user.jpg"
  },
  {
    name: "John Doe",
    unit: "Unit 102",
    email: "john.doe@example.com",
    phone: "(555) 555-1212",
    emergency: "Jane Doe ((555) 999-8888)",
    notes: "Teacher, enjoys helping with tutoring programs.",
    image: "/user.jpg"
  },
  {
    name: "Maria Santos",
    unit: "Unit 210",
    email: "maria.santos@example.com",
    phone: "(555) 456-7890",
    emergency: "Carlos Santos ((555) 111-2222)",
    notes: "Nurse, volunteers at community health drives.",
    image: "/user.jpg"
  },
  {
    name: "David Kim",
    unit: "Unit 407",
    email: "david.kim@example.com",
    phone: "(555) 321-6543",
    emergency: "Grace Kim ((555) 222-3333)",
    notes: "Engineer, organizes weekend basketball games.",
    image: "/user.jpg"
  },
  {
    name: "Sophia Lee",
    unit: "Unit 509",
    email: "sophia.lee@example.com",
    phone: "(555) 789-1234",
    emergency: "Michael Lee ((555) 444-5555)",
    notes: "Artist, helps with mural painting in community areas.",
    image: "/user.jpg"
  },
  {
    name: "James Smith",
    unit: "Unit 601",
    email: "james.smith@example.com",
    phone: "(555) 888-9999",
    emergency: "Anna Smith ((555) 777-6666)",
    notes: "Retired firefighter, shares safety tips during events.",
    image: "/user.jpg"
  }
]

const DirectoryPage = () => {
  const [selectedResident, setSelectedResident] = useState(null)

  if (selectedResident) {
    return <ProfilePage resident={selectedResident} />
  }

  return (
    <div className="directory-page">
      <div className="directory-container">
        <div className="directory-header">
          <h1 className="directory-title">Community Directory</h1>
          <p className="directory-subtitle">
            Browse residents of <strong>Poblacion 4, Hamtic, Antique</strong> and view their profiles to stay connected and engaged in the community.
          </p>
        </div>

        <div className="residents-grid">
          {residents.map((resident, index) => (
            <div key={index} className="resident-card">
              <img
                src={resident.image}
                alt={resident.name}
                className="resident-image"
              />
              <h2 className="resident-name">{resident.name}</h2>
              <p className="resident-unit">{resident.unit}</p>
              <button
                className="view-profile-btn"
                onClick={() => setSelectedResident(resident)}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DirectoryPage
