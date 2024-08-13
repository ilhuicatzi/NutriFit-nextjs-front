import UserComponent from "@/components/project/UserComponent"
function page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    <h1 className="text-4xl font-bold text-center mb-20">Project</h1>
    <UserComponent />
  </main>
  )
}

export default page