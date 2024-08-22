import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <section className="absolute top-0 dark:brightness-[0.2] dark:grayscale bg-[url('/img/imagenNutricion.jpg')] w-full h-[calc(100vh+65px)] bg-cover -z-10"></section>
      <section className="flex justify-start w-full sm:px-20 relative mt-8">
        <article className=" absolute backdrop-blur-lg w-full sm:w-[500px] sm:p-10 h-[400px] bg-zinc-100 dark:bg-zinc-900 bg-opacity-50 dark:opacity-95 rounded-lg -z-10"></article>

        <article className="p-5 sm:p-10 w-full sm:w-[500px]">
          <h1 className="text-5xl text-center mb-10">NutriFit</h1>
          <p className="text-center text-xl mb-16">
            Bienvenido a NutriFit, la mejor aplicación para llevar un control de
            tu cuerpo y mejorar tu salud.
          </p>

          <div className="flex justify-center mt-5">
            <Link href="/auth/login" className="bg-green-800 hover:bg-green-600 text-white px-10 py-2 rounded-md">
              Comenzar
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
