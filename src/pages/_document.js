import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <title>Abraham Serrano | Frontend Developer</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta
            name="description"
            content="Abraham Serrano Montiel Frontend Developer Page"
          />
          <link
            rel="stylesheet"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/_next/static/style.css`}
          />
        </Head>
        <body data-spy="scroll" data-target="#navbar" data-offset="56">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
