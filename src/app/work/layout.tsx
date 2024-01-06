export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-center'>
      <section className='pt-6 sm:pt-2'>
        <div className='flex flex-col'>
          <div className='flex-1 space-y-4'>
            <p className='text-center text-lg text-muted-foreground sm:text-xl'>
              A summary of my work and contributions.
            </p>
          </div>
        </div>
        <hr className='m-auto my-10 w-24' />
        {children}
      </section>
    </div>
  );
}
