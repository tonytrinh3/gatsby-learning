import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  //same as above except i guess it reads better?
  //   const  products  = data.allContentfulProduct.nodes

  console.log(products)

  return (
    <Layout>
      <section className="page">
        {products.map(product => {

          return (<article key={product.id}>
            <GatsbyImage image={getImage(product.image)} alt={product.title} />
            <h3>
              {product.title} <span>${product.price}</span>
            </h3>
            <Link to={`/products/${product.slug}`}>more details</Link>
          </article>)
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        id
        image {
          gatsbyImageData
        }
        slug
        title
      }
    }
  }
`

export default products
