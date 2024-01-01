export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto mb-16 mt-4 flex w-full max-w-3xl flex-col items-start justify-center p-2 sm:mt-8 sm:p-0'>
      {children}
    </div>
  );
}
