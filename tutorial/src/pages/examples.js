import React from 'react'
import Header from '../examples/Header'
import HeaderStatic from '../examples/HeaderStatic'
import Layout from '../components/layout'
import {graphql} from 'gatsby';


const examples = ({data}) => {
    const {site:{info:{author}}} = data
    return (
        <Layout>
            <h1>hello from examples page</h1>
            <Header />
            <HeaderStatic/>
            <h5>author: {author}</h5>
        </Layout>
    )
}

//it has to be MyQuery for some reason 

export const data = graphql`
query MyQuery {
    site(siteMetadata: {}) {
      info:siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }

`

export default examples
