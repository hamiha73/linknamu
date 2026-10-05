type LinkCardProps = {
  title: string;
  href: string;
};

export default function LinkCard({ title, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-full items-center justify-center rounded-xl bg-pink-200 px-5 font-semibold text-pink-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-pink-300 hover:shadow-md"
    >
      {title}
    </a>
  );
}
