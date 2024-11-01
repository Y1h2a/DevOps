import React, { useState } from 'react'
import { useEnquiry } from '../components/EnquiryContext';
import '../styles/ManageEnquiries.css'

function ManageEnquiries() {

  const { enquiries: initialEnquiries } = useEnquiry()
  const [enquiries, setEnquiries] = useState(initialEnquiries)
  const [selectedEnquiry, setSelectedEnquiry] = useState(null)
  const [response, setResponse ] = useState('')

  const handleSelectEnquiry = (selected) => {
    setSelectedEnquiry(selected)

    const updatedEnquiries = enquiries.map((enquiry) =>
      enquiry.id === selected.id ? { ...enquiry, isRead: true } : enquiry
    )
    setEnquiries(updatedEnquiries)
  }

  const handleResponseSubmit = () => {
    if (selectedEnquiry) {
      selectedEnquiry.responses.push({ text: response, isUser: true })
      setResponse('') //clears the input field after submitting
    }
  }

  return (
    <div className="manageEnquiries">
      <h1 className="enquiriesTitle">Enquiries</h1>

      <table className="enquiryTbl">
        <thead className="enquiryTblHeader">
          <tr>
            <th className="enquiryTblCell">Name</th>
            <th className="enquiryTblCell">Message</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.length === 0 ? (
            <tr>
              <td colSpan="2">No current enquiries.</td>
            </tr>
          ) : (
            enquiries.map((enquiry) => (
              <tr 
                key={enquiry.id} 
                onClick={() => handleSelectEnquiry(enquiry)}
                className={enquiry.isRead ? 'read' : 'unread'}
              >
                <td>{enquiry.firstName} {enquiry.lastName}</td>
                <td>{enquiry.message}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {selectedEnquiry && (
        <div className="responseSection">
          <hr className="divider" />
          <h2>Enquiry Details</h2>
          <p><strong>Name:</strong> {selectedEnquiry.firstName} {selectedEnquiry.lastName}</p>
          <p><strong>Email:</strong> {selectedEnquiry.email}</p>
          <p><strong>Message:</strong> {selectedEnquiry.message}</p>

          <h3>Responses:</h3>
          <div className="responses">
            {selectedEnquiry.responses.map((res, index) => (
              <p key={index} className={res.isUser ? 'myResponse' : 'userResponse'}>
                {res.isUser ? 'You: ' : 'User: '}{res.text}
              </p>
            ))}
          </div>

          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Type your response here..."
          />
          <button className="sendResponseBtn" onClick={handleResponseSubmit}>Send</button>
        </div>
      )}
    </div>
  )
}

export default ManageEnquiries;