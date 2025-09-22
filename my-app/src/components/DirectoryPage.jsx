import { useState } from "react"
import "./DirectoryPage.css"
import ProfilePage from "./ProfilePage"

const residents = [
  {
    name: "Nena Alonsagay",
    email: "nenaalonsagay@gmail.com",
    phone: "(0917) 123-4567",
    emergency: "Evan Alonsagay (0917 765-4321)",
    role: "Business Owner",
    interests: "Owner of an eatery",
    image: "/nena.png"
  },
  {
    name: "Merigold Besmonte",
    email: "merigold@yahoo.com",
    phone: "(0922) 234-5678",
    emergency: "Nena Alonsagay (0917 123-4567)",
    role: "Worker",
    interests: "Supports local businesses",
    image: "/merigold.png"
  },
  {
    name: "Lalaine Manzo",
    email: "lalaine@gmail.com",
    phone: "(0933) 345-6789",
    emergency: "No emergency contact",
    role: "Barangay Captain",
    interests: "Leads the community and provides services",
    image: "/lalaine.png"
  },
  {
    name: "Lois Alonsagay",
    email: "lois@gmail.com",
    phone: "(0944) 456-7890",
    emergency: "Jhanin Alonsagay (0944 098-7654)",
    role: "Engineer",
    interests: "Works on engineering projects",
    image: "/lois.png"
  },
  {
    name: "Fritz Ivan Alonsagay",
    email: "fritzivan@gmail.com",
    phone: "(0955) 567-8901",
    emergency: "Hazel Ann Alonsagay (0955 109-8765)",
    role: "Chemist / Business Owner",
    interests: "Sells shirts online",
    image: "/fritz.png"
  },
  {
    name: "Abegail Vegafria",
    email: "abegail@gmail.com",
    phone: "(0966) 678-9012",
    emergency: "Nena Alonsagay (0966 210-9876)",
    role: "Student",
    interests: "Helps with community events",
    image: "/abegail.png"
  },
  {
    name: "Joval Galang",
    email: "joval@gmail.com",
    phone: "(0966) 677-8812",
    emergency: "Fritz Alonsagay (0966 210-9876)",
    role: "Psychiatrist",
    interests: "Helps with community events",
    image: "/joval.png"
  },
  {
    name: "Evan Alonsagay",
    email: "evan@gmail.com",
    phone: "(0966) 688-2012",
    emergency: "Ofelia Alonsagay (0966 210-9876)",
    role: "Laundry Worker",
    interests: "None",
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
              <p className="resident-unit">{resident.phone}</p>
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
