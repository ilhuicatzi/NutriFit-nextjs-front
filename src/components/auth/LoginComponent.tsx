import Link from "next/link"
import LoginForm from "./LoginForm"
import Image from "next/image"

export function LoginComponent() {
  return (
    <div className="w-full lg:grid lg:min-h-[480px] lg:grid-cols-2 xl:min-h-[650px]">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
            <p className="text-balance text-muted-foreground">
                Bienvenido de nuevo 
            </p>
          </div>

          <LoginForm />
          
          <div className="mt-4 text-center text-xs lg:text-sm flex gap-2 justify-center">
            <span>¿No tienes una cuenta?</span>{" "}
            <Link href="/auth/register" className="underline">
                Regístrate
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
          className=" w-full h-[650px] object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
