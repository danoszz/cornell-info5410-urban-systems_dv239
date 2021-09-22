import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"

import styles from "../styles/Page.module.scss"

export default function HardSystems() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hard Systems</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="Urban Systems"
        subtitle="Data Visualisations"
        meta="A1 - 092121 - DV239"
      />
      <main>
        <div className="dataviz">
          <iframe
            id={styles.keplerDataviz}
            title="Inline Hard Systems Map"
            // src="./kepler2.html"
          />
        </div>

        <section className={styles.content}>
          <header className={styles.articleHeader}>
            <h1 className={styles.title}>NYC Link Kiosks</h1>
            <p className={styles.description}>Hard Systems</p>
          </header>
          <article className={styles.articleBody}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              malesuada, libero eu maximus luctus, justo ligula suscipit justo,
              mattis pellentesque quam eros a leo. Pellentesque at varius nisi.
              Etiam imperdiet, nulla vel accumsan vulputate, lectus enim feugiat
              erat.
            </p>
            <h3>Process</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              malesuada, libero eu maximus luctus, justo ligula suscipit justo,
              mattis pellentesque quam eros a leo. Pellentesque at varius nisi.
              Etiam imperdiet, nulla vel accumsan vulputate, lectus enim feugiat
              erat, in auctor quam dui sed eros. Quisque molestie laoreet nibh,
              eget scelerisque ante bibendum nec. Integer vel felis vulputate,
              faucibus nibh non, lobortis neque. Duis sit amet massa suscipit,
              cursus nulla id, rutrum tellus. Donec rhoncus enim sem, sed semper
              enim semper tempor. Pellentesque et accumsan elit. Nullam vel
              magna non velit commodo posuere ac in diam. Donec eu blandit nunc.
            </p>
            <h3>Features</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              malesuada, libero eu maximus luctus, justo ligula suscipit justo,
              mattis pellentesque quam eros a leo. Pellentesque at varius nisi.
              Etiam imperdiet, nulla vel accumsan vulputate, lectus enim feugiat
              erat, in auctor quam dui sed eros. Quisque molestie laoreet nibh,
              eget scelerisque ante bibendum nec. Integer vel felis vulputate,
              faucibus nibh non, lobortis neque. Duis sit amet massa suscipit,
              cursus nulla id, rutrum tellus. Donec rhoncus enim sem, sed semper
              enim semper tempor. Pellentesque et accumsan elit. Nullam vel
              magna non velit commodo posuere ac in diam. Donec eu blandit nunc.
            </p>
            <h3>Enhancements</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              malesuada, libero eu maximus luctus, justo ligula suscipit justo,
              mattis pellentesque quam eros a leo. Pellentesque at varius nisi.
              Etiam imperdiet, nulla vel accumsan vulputate, lectus enim feugiat
              erat, in auctor quam dui sed eros.
            </p>
            <h3>Conclusion</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              malesuada, libero eu maximus luctus, justo ligula suscipit justo,
              mattis pellentesque quam eros a leo. Pellentesque at varius nisi.
              Etiam imperdiet, nulla vel accumsan vulputate, lectus enim feugiat
              erat, in auctor quam dui sed eros.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  )
}
