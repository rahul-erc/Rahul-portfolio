"use client";

export default function Timeline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative ml-6 border-l border-white/20">
      {children}
    </div>
  );
}