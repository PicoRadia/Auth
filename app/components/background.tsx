"use client"

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full">
      {/* Dot pattern */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-background to-secondary/10" 
      />
      
      {/* Gradient blobs */}
      <div 
        className="absolute left-[10%] top-[20%] -z-10 h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]"
        style={{ animation: 'move 20s infinite' }}
      />
      <div 
        className="absolute right-[10%] bottom-[20%] -z-10 h-[300px] w-[300px] rounded-full bg-secondary/20 blur-[100px]"
        style={{ animation: 'move 25s infinite' }}
      />
    </div>
  )
}

export default Background;