import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-1.jpg"
import {  GatsbyImage, getImage } from "gatsby-plugin-image"

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  const image2 = getImage(data.gatsbyImage2)
  const image3 = getImage(data.gatsbyImage3)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" alt="img1" />
      </article>
      <article className="single-image">
        <h3>fixed image </h3>
        <GatsbyImage image={image2} alt="image" />
      </article>
      <article className="single-image">
        <h3>fluid image</h3>
        <GatsbyImage image={image3} alt="image" />
      </article>
    </section>
  )
}

export const getImages = graphql`
  {
    gatsbyImage2: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        gatsbyImageData(, transformOptions: { grayscale: true })
      }
    }

    gatsbyImage3: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        gatsbyImageData(, transformOptions: { grayscale: true })
      }
    }

  }
`

export default Images
