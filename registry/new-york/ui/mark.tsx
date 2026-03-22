function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block px-1 font-semibold">
      <span
        className="absolute inset-0 bg-yellow-300 dark:bg-yellow-600 rotate-0 -skew-y-1 skew-x-1 scale-100 transform"
        style={{
          clipPath: "polygon(0% 15%, 100% 12%, 98% 85%, 3% 88%)",
          zIndex: -1,
        }}
      />
      <span
        className="absolute inset-0 bg-yellow-300 dark:bg-yellow-600 scale-98 rotate-1 skew-x-1 transform"
        style={{
          clipPath: "polygon(2% 20%, 99% 10%, 100% 80%, 4% 90%)",
          zIndex: -2,
          opacity: 0.7,
        }}
      />
      <mark className="bg-transparent">{children}</mark>
    </span>
  );
}

export { Mark };
