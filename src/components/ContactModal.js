import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ContactModal = ({ setModalShown }) => {
  const data = useStaticQuery(graphql`
    query ModalQuery {
      site {
        siteMetadata {
          email
          linkedin
        }
      }
      allFile(filter: { relativeDirectory: { eq: "icons" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(width: 50, placeholder: TRACED_SVG)
          }
          name
        }
      }
      file(relativePath: { eq: "myPhotoCrop.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 550, placeholder: TRACED_SVG)
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const photo = data.file.childImageSharp.gatsbyImageData

  const getFluidFromArray = nameOfImage => {
    return images.filter(item => item.name === nameOfImage)[0].childImageSharp
      .gatsbyImageData
  }

  const [contactShown, setContactShown] = useState(false)

  useEffect(() => {
    setContactShown(false)
  }, [])

  return (
    <div
      className="fixed flex flex-col justify-center items-center bg-gray-500 inset-0 bg-opacity-50 transition-opacity z-40"
      style={{ backdropFilter: "blur(20px)" }}
    >
      <div className="w-auto h-auto m-3 bg-independence md:rounded-xl shadow-xl z-50 overflow-auto md:overflow-hidden">
        <nav className="flex justify-start items-center h-16">
          <button className="tech-item" onClick={() => setModalShown(false)}>
            <GatsbyImage
              image={getFluidFromArray("close")}
              className="inline-block w-8 md:w-10 m-3 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500"
              alt="close icon"
            ></GatsbyImage>
          </button>
        </nav>
        <main className="flex flex-col m-5 mt-0 justify-center items-center">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Contact information
            </h2>
          </div>
          <div>
            <figure>
              <GatsbyImage
                image={photo}
                className="inline-block w-72 h-72 m-5 rounded-full shadow-xl"
                alt="photo of JK"
              ></GatsbyImage>
            </figure>
          </div>
          <div className="flex flex-col items-center justify-center bg-independence-text text-independence text-xl font-light shadow-xl rounded-xl w-80 md:w-100 h-auto p-5">
            <p>
              If you have any question, remark or need advice, do not hesitate
              to contact me here:
            </p>
            <div className="flex flex-col justify-center items-center mt-2 gap-1">
              {!contactShown && (
                <button
                  onClick={() => setContactShown(true)}
                  className="button-contact bg-dino-green outline-none border-none p-2 rounded-xl hover:text-white"
                >
                  Click to show it
                </button>
              )}

              {contactShown && (
                <figure className="flex flex-col justify-center items-center mt-2 gap-1 rounded-xl bg-white p-3">
                  <h3 className="font-bold">Jozef Kováč</h3>
                  <span>{data.site.siteMetadata.email}</span>
                  <a href={data.site.siteMetadata.linkedin}>
                    <GatsbyImage
                      image={getFluidFromArray("linkedin")}
                      className="w-8 mt-1 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500"
                      alt="close icon"
                    ></GatsbyImage>
                  </a>
                </figure>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ContactModal
