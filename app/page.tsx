import Link from "next/link";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const teachers = [
  {
    initials: "AS",
    name: "Anita Shrestha",
    subject: "Mathematics & Science · Grade 9–12",
    rating: "4.8",
    reviews: "126",
    experience: "7 yrs experience",
    location: "Kathmandu",
    price: "NPR 1,200",
  },
  {
    initials: "BT",
    name: "Bikash Thapa",
    subject: "English & Nepali · Grade 5–10",
    rating: "4.9",
    reviews: "84",
    experience: "5 yrs experience",
    location: "Pokhara",
    price: "NPR 1,200",
  },
  {
    initials: "SG",
    name: "Sunita Gurung",
    subject: "Computer Science · Grade 9–12",
    rating: "4.7",
    reviews: "63",
    experience: "6 yrs experience",
    location: "Lalitpur",
    price: "NPR 1,200",
  },
];

const faqs = [
  {
    question: "How are teachers verified?",
    answer:
      "Teachers submit their identity documents and academic qualifications. Our administration team reviews these documents before approving a teacher profile.",
  },
  {
    question: "Which payment methods can I use?",
    answer:
      "The platform is designed to support local payment methods such as eSewa, Khalti, Fonepay QR and bank transfers. Payment integration will be added separately.",
  },
  {
    question: "Can I take classes online?",
    answer:
      "Yes. You can find tutors offering online classes as well as in-person classes.",
  },
  {
    question: "What if I need a refund?",
    answer:
      "You will be able to submit a refund request through your account. Requests will be reviewed according to the platform's refund policy.",
  },
];

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <h2
        className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
        style={{ fontFamily: "var(--font-fraunces)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#65716A] md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3">
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-none text-xl font-semibold ${
          footer
            ? "bg-[#CCE0D7] text-[#3D4F45]"
            : "bg-[#3D4F45] text-white"
        }`}
      >
        N
      </span>
      <span
        className={`text-base font-semibold ${
          footer ? "text-white" : "text-[#3D4F45]"
        }`}
      >
        Nepal Education Hub
      </span>
    </Link>
  );
}

function Navigation() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Find Tutors", href: "/tutors" },
    { label: "Discussion", href: "/discussions" },
    { label: "Article", href: "/articles" },
    { label: "About", href: "/#about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#E3E8E4] bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[86px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#65716A] transition-colors hover:text-[#3D4F45]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/auth/sign-up"
            className="text-sm font-medium text-[#65716A] transition-colors hover:text-[#3D4F45]"
          >
            Become a Teacher
          </Link>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/auth/login"
            className="rounded-none px-5 py-3 text-sm font-semibold text-[#3D4F45] transition hover:bg-[#F7F8F6]"
          >
            Login
          </Link>
          <Link
            href="/auth/sign-up"
            className="rounded-none bg-[#3D4F45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#293B32]"
          >
            Sign Up
          </Link>
        </div>

        <details className="relative sm:hidden">
          <summary
            aria-label="Open navigation menu"
            className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-none border border-[#E3E8E4] text-[#3D4F45]"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>

          <div className="absolute right-0 top-14 z-50 w-64 rounded-none border border-[#E3E8E4] bg-white p-4 shadow-xl">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-none px-3 py-3 text-sm text-[#3D4F45] hover:bg-[#F7F8F6]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/auth/sign-up"
                className="rounded-none px-3 py-3 text-sm text-[#3D4F45] hover:bg-[#F7F8F6]"
              >
                Become a Teacher
              </Link>
              <div className="my-2 border-t border-[#E3E8E4]" />
              <Link
                href="/auth/login"
                className="rounded-none px-3 py-3 text-sm font-semibold text-[#3D4F45] hover:bg-[#F7F8F6]"
              >
                Login
              </Link>
              <Link
                href="/auth/sign-up"
                className="rounded-none bg-[#3D4F45] px-3 py-3 text-center text-sm font-semibold text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[664px] max-w-[1440px] items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-20">
        <div className="max-w-[664px]">
          <span className="inline-flex rounded-none bg-[#CCE0D7] px-4 py-2 text-xs font-semibold text-[#3D4F45]">
            CONNECTING MINDS. EMPOWERING FUTURES.
          </span>

          <h1
            className="mt-7 text-5xl font-semibold leading-[1.1] tracking-tight text-[#252D29] md:text-6xl lg:text-[68px]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Find the Right Teacher. Unlock Your Potential.
          </h1>

          <p className="mt-7 max-w-[620px] text-base leading-8 text-[#65716A] md:text-lg">
            Connect with experienced tutors, discover personalised learning
            opportunities and achieve your academic goals.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/tutors"
              className="inline-flex min-h-[52px] items-center justify-center rounded-none bg-[#3D4F45] px-7 text-sm font-semibold text-white transition hover:bg-[#293B32]"
            >
              Find a Tutor
            </Link>
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-[52px] items-center justify-center rounded-none border border-[#3D4F45] px-7 text-sm font-semibold text-[#3D4F45] transition hover:bg-[#CCE0D7]"
            >
              Become a Teacher
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <div className="absolute left-[23%] top-[19%] h-[73%] w-[73%] rounded-none bg-[#CCE0D7]" />
          <div className="absolute left-[3%] top-[3%] h-[35%] w-[35%] rounded-none bg-[#94A89F]" />

          <div className="absolute left-[8%] top-[12%] z-10 w-[260px] rounded-none border border-[#E3E8E4] bg-white p-5 shadow-lg">
            <p className="text-xs font-semibold tracking-wider text-[#65716A]">
              UPCOMING CLASS
            </p>
            <p className="mt-3 text-base font-semibold text-[#252D29]">
              Grade 10 Mathematics
            </p>
            <p className="mt-3 text-sm text-[#65716A]">
              Today · 4:30 PM · Online
            </p>
          </div>

          <div className="absolute right-[2%] top-[46%] z-20 flex w-[300px] items-center gap-4 rounded-none border border-[#E3E8E4] bg-white p-5 shadow-lg">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-none bg-[#CCE0D7] text-base font-semibold text-[#3D4F45]">
              AS
            </div>
            <div>
              <p className="text-sm font-semibold text-[#252D29]">
                Anita Shrestha
              </p>
              <p className="mt-1 text-sm text-[#65716A]">
                Verified · ★ 4.8
              </p>
            </div>
          </div>

          <div className="absolute bottom-[5%] left-[14%] z-20 w-[240px] rounded-none border border-[#E3E8E4] bg-white p-5 shadow-lg">
            <p className="text-sm text-[#65716A]">Learning streak</p>
            <p
              className="mt-2 text-3xl font-semibold text-[#3D4F45]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              12 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TutorSearch() {
  return (
    <section id="tutor-search" className="bg-[#F7F8F6] px-6 py-7 md:px-10 lg:px-16">
      <form
        action="/tutors"
        method="GET"
        className="mx-auto grid max-w-[1248px] items-center gap-3 rounded-none border border-[#E3E8E4] bg-white p-5 shadow-sm md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]"
      >
        <label className="block">
          <span className="block px-2 text-xs font-semibold tracking-wide text-[#65716A]">
            SUBJECT
          </span>
          <select
            name="subject"
            defaultValue="Mathematics"
            className="mt-2 h-11 w-full appearance-none rounded-none bg-[#F7F8F6] px-3 text-sm text-[#252D29] outline-none focus:ring-2 focus:ring-[#94A89F]"
          >
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
            <option>Nepali</option>
            <option>Computer Science</option>
            <option>Accountancy</option>
          </select>
        </label>

        <label className="block">
          <span className="block px-2 text-xs font-semibold tracking-wide text-[#65716A]">
            GRADE / LEVEL
          </span>
          <select
            name="grade"
            defaultValue="Grade 10"
            className="mt-2 h-11 w-full appearance-none rounded-none bg-[#F7F8F6] px-3 text-sm text-[#252D29] outline-none focus:ring-2 focus:ring-[#94A89F]"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1}>Grade {i + 1}</option>
            ))}
            <option>University</option>
          </select>
        </label>

        <label className="block">
          <span className="block px-2 text-xs font-semibold tracking-wide text-[#65716A]">
            MODE
          </span>
          <select
            name="mode"
            defaultValue="Both"
            className="mt-2 h-11 w-full appearance-none rounded-none bg-[#F7F8F6] px-3 text-sm text-[#252D29] outline-none focus:ring-2 focus:ring-[#94A89F]"
          >
            <option value="Both">Online or In-person</option>
            <option value="Online">Online</option>
            <option value="In-person">In-person</option>
          </select>
        </label>

        <label className="block">
          <span className="block px-2 text-xs font-semibold tracking-wide text-[#65716A]">
            LOCATION
          </span>
          <select
            name="location"
            defaultValue="Kathmandu"
            className="mt-2 h-11 w-full appearance-none rounded-none bg-[#F7F8F6] px-3 text-sm text-[#252D29] outline-none focus:ring-2 focus:ring-[#94A89F]"
          >
            <option>Kathmandu</option>
            <option>Lalitpur</option>
            <option>Bhaktapur</option>
            <option>Pokhara</option>
            <option>Biratnagar</option>
            <option>Dharan</option>
            <option>Other</option>
          </select>
        </label>

        <button
          type="submit"
          className="mt-2 h-12 rounded-none bg-[#3D4F45] px-8 text-sm font-semibold text-white transition hover:bg-[#293B32] lg:mt-5"
        >
          Search
        </button>
      </form>
    </section>
  );
}

function FeaturedTeachers() {
  return (
    <section id="teachers" className="bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1248px]">
        <SectionHeading
          title="Featured teachers"
          subtitle="Discover experienced tutors ready to help you reach your academic goals."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <article
              key={teacher.name}
              className="rounded-none border border-[#E3E8E4] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-none bg-[#CCE0D7] text-base font-semibold text-[#3D4F45]">
                  {teacher.initials}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#252D29]">
                    {teacher.name}
                  </h3>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#3D4F45]">
                    <span className="flex h-4 w-4 items-center justify-center rounded-none bg-[#CCE0D7] text-[10px]">
                      ✓
                    </span>
                    Verified
                  </span>
                </div>
              </div>

              <p className="mt-6 text-sm text-[#65716A]">
                {teacher.subject}
              </p>

              <p className="mt-4 text-sm text-[#3D4F45]">
                ★ {teacher.rating} ({teacher.reviews}) · {teacher.experience} ·{" "}
                {teacher.location}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-[#E3E8E4] pt-5">
                <div>
                  <p className="text-lg font-semibold text-[#252D29]">
                    {teacher.price}
                  </p>
                  <p className="mt-1 text-xs text-[#65716A]">per hour</p>
                </div>
                <Link
                  href="/auth/login"
                  className="rounded-none bg-[#3D4F45] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#293B32]"
                >
                  Book class
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/tutors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3D4F45] hover:underline"
          >
            Explore all teachers <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const benefits = [
    {
      title: "Verified teachers",
      description:
        "Teacher identity and qualifications are reviewed before profiles are approved.",
      icon: "✓",
    },
    {
      title: "Local payments",
      description:
        "Designed around convenient payment methods used across Nepal.",
      icon: "₨",
    },
    {
      title: "Track progress",
      description:
        "Keep learning activities, assignments and progress organized in one place.",
      icon: "↗",
    },
  ];

  const stats = [
    ["5,000+", "Students (sample)"],
    ["300+", "Tutors (sample)"],
    ["40+", "Subjects (sample)"],
    ["4.8", "Avg. rating (sample)"],
  ];

  return (
    <section id="about" className="bg-[#3D4F45] px-6 py-20 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1248px]">
        <h2
          className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Why choose Nepal Education Hub?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-none border border-white/15 bg-white/10 p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-none bg-[#CCE0D7] text-lg font-semibold text-[#3D4F45]">
                {benefit.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/20 pt-12 md:grid-cols-4">
          {stats.map(([number, label]) => (
            <div key={label}>
              <p
                className="text-4xl font-semibold md:text-5xl"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {number}
              </p>
              <p className="mt-3 text-sm text-[#CCE0D7]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      quote:
        "My maths grades improved after just two months of weekly sessions. Booking was easy.",
      name: "Prakash Adhikari",
      detail: "Grade 10 · Biratnagar",
    },
    {
      quote:
        "I found an English tutor near me within minutes and paid through eSewa.",
      name: "Sita Rai",
      detail: "Grade 12 · Dharan",
    },
    {
      quote:
        "The assignment tracker helps me stay on top of deadlines before SEE.",
      name: "Rohan Karki",
      detail: "Grade 10 · Bhaktapur",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#F7F8F6] px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1248px]">
        <SectionHeading title="What students say" />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="flex min-h-[208px] flex-col justify-between rounded-none border border-[#E3E8E4] bg-white p-7"
            >
              <p className="text-base leading-8 text-[#252D29]">
                “{item.quote}”
              </p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-[#252D29]">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-[#65716A]">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeacherCTA() {
  return (
    <section id="become-teacher" className="bg-[#F7F8F6] px-6 pb-20 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1248px] flex-col items-start justify-between gap-7 rounded-none bg-[#CCE0D7] px-8 py-10 md:flex-row md:items-center md:px-14">
        <div>
          <h2
            className="text-3xl font-semibold text-[#3D4F45] md:text-4xl"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Teach with Nepal Education Hub
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#4D6056]">
            Share your knowledge, connect with students and make a difference
            in their learning journey.
          </p>
        </div>

        <Link
          href="/auth/sign-up"
          className="inline-flex min-h-[52px] shrink-0 items-center justify-center rounded-none bg-[#3D4F45] px-7 text-sm font-semibold text-white transition hover:bg-[#293B32]"
        >
          Apply as a Teacher
        </Link>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="bg-white px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1248px]">
        <SectionHeading title="Frequently asked questions" />

        <div className="space-y-5">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-none border border-[#E3E8E4] bg-[#F7F8F6] px-6 py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-[#252D29] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="text-2xl font-normal text-[#65716A] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-5 max-w-4xl text-sm leading-7 text-[#65716A]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#3D4F45] px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1248px] gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <Logo footer />
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#CCE0D7]">
            Connecting Minds. Empowering Futures.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Platform</h3>
          <div className="mt-5 flex flex-col gap-4 text-sm text-[#CCE0D7]">
            <Link href="/tutors" className="hover:text-white">Find Tutors</Link>
            <Link href="/subjects" className="hover:text-white">Subjects</Link>
            <Link href="/#tutor-search" className="hover:text-white">Search Tutors</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Community</h3>
          <div className="mt-5 flex flex-col gap-4 text-sm text-[#CCE0D7]">
            <Link href="/discussions" className="hover:text-white">Discussions</Link>
            <Link href="/articles" className="hover:text-white">Articles</Link>
            <Link href="/resources" className="hover:text-white">Resources</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <div className="mt-5 flex flex-col gap-4 text-sm text-[#CCE0D7]">
            <Link href="/#about" className="hover:text-white">About</Link>
            <Link href="/auth/sign-up" className="hover:text-white">Become a Teacher</Link>
            <Link href="/#faq" className="hover:text-white">Help & Contact</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1248px] border-t border-white/20 pt-7">
        <p className="text-xs text-[#CCE0D7]">
          © 2026 Nepal Education Hub · Prototype design, sample data only
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main
      id="top"
      className={`${fraunces.variable} ${inter.variable} min-h-screen bg-[#F7F8F6] text-[#252D29]`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <Navigation />
      <Hero />
      <TutorSearch />
      <FeaturedTeachers />
      <WhyChooseUs />
      <Testimonials />
      <TeacherCTA />
      <FAQ />
      <Footer />
    </main>
  );
}