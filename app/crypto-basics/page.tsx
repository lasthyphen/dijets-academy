import Link from 'next/link';
import COURSES from '@/content/beginners';
import { buttonVariants } from '@/components/ui/button';

export default function Page(): React.ReactElement {

    return (
        <main className="py-12 sm:py-24">
         <Courses title="Crypto" subtitle="101" description="If you’re new to crypto, or need a refresher on some key concepts, this module of mini-intro articles is for you.Here, you will find articles that will teach you about terms that you may have either already come across in your everyday life or will very likely be hearing in the near future owing to their growing popularity and adoption across the world." courses={COURSES.official} />
        {COURSES.ecosystem.length > 0 && <Courses title="Blockchain" subtitle="Concepts" description="Commonly used terms and concepts in some of the most widely known cryptocurrencies" courses={COURSES.ecosystem} />}
        {COURSES.basics.length > 0 && <Courses title="Key" subtitle="Concepts" description="Some of the Key cryptocurrency and blockchain concepts" courses={COURSES.basics} />}
        </main>
    );
}

function Courses(props: { title: string, subtitle: string, description: string, courses: any[] }): React.ReactElement {
    const getImageExtension = (slug: string) => {
        // Add the slugs that should use .png here
        const pngSlugs = ['decentralised-applications', 'crypto-portfolio', 'privacy', 'impact-payment-systems', 'game-theory', 'tokenomics', 'byzantine', 'crypto'];
        return pngSlugs.includes(slug) ? 'png' : 'svg';
      };
    return (
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto w-full lg:mx-0">
            <span className="flex mx-auto gap-2 justify-center w-full">
          <h2 className="text-center text-5xl font-bold tracking-tight sm:text-10xl">{props.title}</h2>
          <h2 className="text-center text-5xl font-bold tracking-tight sm:text-10xl -ml-[.05rem] px-[0.8rem] text-[#003b2f] bg-[#03fc9d]">{props.subtitle}</h2>
          </span>
          <p className="mt-12 text-center text-lg leading-8 text-muted-foreground">
            {props.description}
          </p>
        </div>
          <div className="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-7 sm:mt-12 sm:pt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {props.courses.map((course) => (
              <Link href={`/course/concepts/${course.slug}`} key={course.slug} className="flex max-w-xl flex-col items-start space-y-2">
          <img 
            src={`/course-banner/${course.slug}.${getImageExtension(course.slug)}`} 
            alt={`${course.name} banner`}
            className="w-full aspect-[3/2] object-cover rounded-lg mb-5 border border-slate-300/40 p-[0.8rem]" 
          />
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <span className="text-gray-500">
                    {course.duration}
                  </span>
                  {[...course.tools, ...course.languages].map((item) => (
                    <span key={item}
                      className="relative z-10 rounded-full bg-accent px-3 py-1.5 font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
  
                </div>
                <div className="group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                    <span>
                      {course.name}
                    </span>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">{course.description}</p>
                </div>
              </Link>
            ))}
      </div>
        </div>
      </div>
    )
  }