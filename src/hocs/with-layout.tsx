import React from 'react'
import { FC, ComponentType } from 'react'
import Layout from '~/components/layout'

const withLayout =
  <Props extends object>(Component: ComponentType<Props>): FC<Props> =>
  props =>
    (
      <Layout>
        <Component {...(props as Props)} />
      </Layout>
    )

export default withLayout
