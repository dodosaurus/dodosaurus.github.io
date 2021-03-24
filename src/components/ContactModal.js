import React from "react"

const ContactModal = ({ setModalShown }) => {
  return (
        <div className="fixed flex justify-center items-center bg-gray-500 inset-0 bg-opacity-50 transition-opacity z-40" style={{backdropFilter: 'blur(20px)' }}>

            <div className="relative w-100 h-100 bg-independence rounded-xl shadow-xl z-50">
                <button onClick={ () => setModalShown(false) }>Close</button>
            </div>

        </div>
  )
}

export default ContactModal
