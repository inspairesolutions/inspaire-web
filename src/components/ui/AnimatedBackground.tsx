export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-300">
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-void transition-colors duration-300" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-40 transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 70, 229, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating Orbs - contained within viewport */}
      <div className="absolute w-[400px] h-[400px] -top-32 -left-32 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-float bg-gradient-radial from-purple-400 to-transparent" />
      <div className="absolute w-[350px] h-[350px] top-1/3 right-0 translate-x-1/2 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-float delay-200 bg-gradient-radial from-cyan-400 to-transparent" style={{ animationDuration: '8s' }} />
      <div className="absolute w-[300px] h-[300px] bottom-0 left-1/4 rounded-full blur-3xl opacity-20 dark:opacity-30 animate-float delay-400 bg-gradient-radial from-blue-400 to-transparent" style={{ animationDuration: '10s' }} />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 dark:via-void/50 to-slate-50 dark:to-void transition-colors duration-300" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
