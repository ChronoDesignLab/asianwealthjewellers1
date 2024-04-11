export default function Title({ title, color }: { title: string, color: string }) {
  return (
    <p style={{color: `${color}`}} className="text-2xl lg:text-4xl font-semibold text-center">
      {title}
    </p>
  );
}
