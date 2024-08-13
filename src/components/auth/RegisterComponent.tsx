import Link from "next/link"
import RegisterForm from "./RegisterForm"
import Image from "next/image"

export function RegisterComponent() {
  return (
    <div className="w-full lg:grid lg:min-h-[500px] lg:grid-cols-2 xl:min-h-[700px]">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Registrate</h1>
            <p className="text-balance text-muted-foreground">
                Bienvenido a la comunidad
            </p>
          </div>

          <RegisterForm />
          
          <div className="mt-4 text-center text-xs lg:text-sm flex gap-2 justify-center">
            <span>¿Ya tienes una cuenta?</span>
            <Link href="/login" className="underline">
                Inicia Sesión
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/img/paisaje.webp"
          alt="Image"
          width="1920"
          height="1080"
          className=" w-full h-[700px] object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
