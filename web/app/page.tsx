import StartRecording from "@/components/start-recording";

export default function Page() {
  return (
    <main>
      <section className="text-center surface-base min-h-screen px-6 py-8">
        <div className="flex-col w-full">
          <h3 className="text-secondary">Last session 03:00 mins</h3>
          <h1 className="font-heading text-primary">Find your rhythm</h1>
          <h2 className="text-secondary">A tactile sanctuary for your milking journey</h2>
        </div>

        <div className="flex justify-center">
          <StartRecording />
        </div>
      </section>
    </main>
  );
}
