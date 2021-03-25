import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
      file(relativePath: { eq: "myPhotoCrop.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const photo = data.file.childImageSharp.fluid

  const getFluidFromArray = nameOfImage => {
    return images.filter(item => item.name === nameOfImage)[0].childImageSharp
      .fluid
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
      <div className="w-auto h-auto m-3 bg-independence rounded-xl shadow-xl z-50">
        <nav className="flex justify-start items-center h-16">
          <button className="tech-item" onClick={() => setModalShown(false)}>
            <Img
              fluid={getFluidFromArray("close")}
              className="inline-block w-8 md:w-10 m-3 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500"
              alt="close icon"
            ></Img>
          </button>
        </nav>
        <main className="flex flex-col m-5 justify-center items-center">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Contact information
            </h2>
            </div>
          <div>
            <figure>
              <Img
                fluid={photo}
                className="inline-block w-80 h-80 md:w-100 md:h-100 m-5 rounded-full shadow-xl"
                alt="close icon"
              ></Img>
            </figure>
          </div>
          <div className="flex flex-col items-center justify-center bg-independence-text text-independence text-xl font-light shadow-xl rounded-xl w-80 md:w-100 h-auto p-5">
            <p>
              If you have any question, remark or need advice, do not hesitate
              to contact me here:
            </p>
            <div className="flex flex-col justify-center items-center mt-2 gap-1">
              
              {!contactShown && <button onClick={ () => setContactShown(true) } className="button-contact bg-dino-green outline-none border-none p-2 rounded-xl hover:text-white">
                Click to show it
              </button>}

              {contactShown && <figure className="flex flex-col justify-center items-center mt-2 gap-1 rounded-xl bg-white p-3">
                <h3 className="font-bold">Jozef Kováč</h3>
                <span>{data.site.siteMetadata.email}</span>
                <a href={data.site.siteMetadata.linkedin}>
                  <Img
                    fluid={getFluidFromArray("linkedin")}
                    className="w-8 mt-1 cursor-pointer transform hover:rotate-6 transition ease-linear duration-500"
                    alt="close icon"
                  ></Img>
                </a>
              </figure>}

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ContactModal
