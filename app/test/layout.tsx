export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="bg-slate-500">
       {children}
      </body>
    </html>
  )
}