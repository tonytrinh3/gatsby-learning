import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-1.jpg"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  const image = getImage(data.gatsbyImage)
  console.log(image)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" alt="img1" />
      </article>
      <article className="single-image">
        <h3>fixed image </h3>
        <GatsbyImage image={image} alt="image" />
      </article>
      <article className="single-image">
        <h3>fluid image</h3>
      </article>
    </section>
  )
}

export const getImages = graphql`
  {
    gatsbyImage: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }

    fluid: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Images
