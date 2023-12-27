export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto mb-16 mt-4 flex w-full max-w-4xl flex-col items-start justify-center sm:mt-8'>
      {children}
    </div>
  );
}
