import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

// 보여 주기용 더미 데이터 (나중에 실제 값으로 교체)
const profile = {
  name: "변성우",
  bio: "AI미래투자 연구소",
  imageSrc: "/avatar.svg",
};

const links = [
  { title: "GitHub", href: "https://github.com" },
  { title: "LinkedIn", href: "https://www.linkedin.com" },
  { title: "Blog", href: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-10 px-5 py-12">
      <ProfileHeader {...profile} />
      <section aria-label="링크 목록" className="flex flex-col gap-4">
        {links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </section>
    </main>
  );
}
