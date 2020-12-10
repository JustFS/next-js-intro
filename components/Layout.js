// component next
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-50 pt-5 text-center">
      <Head>
        <title>{page}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container-lg">
        <h1 className="text-6xl mb-2">Crypto Watch</h1>
        <div className="inline-grid grid-cols-2 gap-x-10 p-4">
          <Link href="/">
            <button className="bg-blue-200 p-2 m-2 rounded">Accueil</button>
          </Link>
          <Link href="/about">
            <button className="bg-blue-200 p-2 m-2 rounded">À propos</button>
          </Link>
        </div>
        <div>
          <Image
            src="/header.jpg"
            alt="footer-pic"
            width="400"
            height="50"
            className="rounded"
            // quality={75} 75 by default
            // unoptimized
            // loading="lazy"
          />
        </div>
      </header>

      <main className="container-lg mx-auto max-w-md pt-8">{children}</main>

      <footer className="p-10">
        <Image
          src="/bottom.jpg"
          alt="footer-pic"
          width="1000"
          height="30"
          id="img-top"
          layout="intrinsic"
          className="rounded"
          // quality={75} 75 by default
          // unoptimized
          // loading="lazy"
        />
        <ul className="pt-10 pb-4 flex justify-around">
          <li>À propos</li>
          <li>Qui sommes nous</li>
          <li>From Scratch - 2020</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          culpa aliquam fugit vel illo nostrum. Consequuntur illo necessitatibus
          error quisquam. Ex quo quasi dolorum vero rerum, laboriosam
          distinctio, veniam itaque quam nesciunt ea dolores blanditiis sit
          nemo, explicabo nostrum! Itaque.
        </p>
      </footer>

      <style jsx>{`
        p {
          color: grey;
        }
      `}</style>
    </div>
  );
}
