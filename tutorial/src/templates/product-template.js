import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const productTemplate = ({
  data: {
    product: {
      price,
      title,
      image,
      info: { info },
    },
  },
}) => {
  //   console.log(props)
  return (
    <Layout>
      <div styles={{ textAlign: "center" }}>
        <Link to="/products">back to products</Link>
        <h1>single product : {title}</h1>
      </div>
      <section className = "single-product">
        <article>
            <GatsbyImage image ={getImage(image)} alt={title}/>
        </article>
        <article>
            <h1>{title}</h1>
            <h3>${price}</h3>
            <p>{info}</p>
            <button>add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      price
      info {
        info
      }
      title
      image {
        gatsbyImageData(width: 300)
      }
    }
  }
`

export default productTemplate
