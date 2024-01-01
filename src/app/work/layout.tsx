export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-center'>
      {children}
    </div>
  );
}
