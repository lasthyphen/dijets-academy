import COURSES from '@/content/courses';
// import ExploreSection from '@/components/explorerSection';
import Link from 'next/link';

export default function HomePage(): React.ReactElement {
  return (
    <>
      <main className="container relative">
        <Hero />
        <Courses title="Courses &amp; Modules" description="Dijets Academy offers fundamental courses &amp; modules specifically designed for individuals who are new to the Dijets ecosystem, and advanced courses for those who wish to master the art of configuring, modifying, or even creating entirely new Blockchains, ECCs, or Virtual Machines from scratch." courses={COURSES.official_featured} />
        {COURSES.ecosystem.length > 0 && <Courses title="Ecosystem Courses" description="Check out some of the key ecosystem courses provided" courses={COURSES.ecosystem} />}

      </main>
    </>
  );
}

function Hero(): React.ReactElement {

  return (
<>  </>
  );
}


function Courses(props: { title: string, description: string, courses: any[] }): React.ReactElement {
  const getImageExtension = (slug: string) => {
    // Add the slugs that should use .png here
    const pngSlugs = ['customizing-evm', 'interchain-token-transfer', 'avacloudapis'];
    return pngSlugs.includes(slug) ? 'png' : 'gif';
  };
  return (
    <div className="py-18 sm:py-24">
      <h2 className="text-center text-4xl font-bold sm:text-10xl my-12">Explore Dijets Academy</h2>
      <div className="w-full max-w-6xl mx-auto px-4">
      <p className="mb-12 mt-4 text-center text-lg leading-8 text-muted-foreground">
            {props.description}
          </p>
          </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-xl font-bold sm:text-10xl mt-12 mb-6">New to Blockchain?</h2>
        <Link href="/crypto-basics" className="block max-w-[18rem] p-4 mx-auto mt-4 mb-12 text-sm rounded-lg bg-[#03fc9d] border text-center border-b hover:bg-[#f1f1f1]" role="alert">
           Start with our Crypto 101 module <span className='underline'>here</span>.
        </Link>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-7 sm:mt-24 sm:pt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {props.courses.map((course) => (
            <Link href={`/course/${course.slug}`} key={course.slug} className="flex max-w-xl flex-col items-start space-y-2">
              <img src={`/course-banner/${course.slug}.svg`} alt="" className="w-full aspect-[3/2] object-cover rounded-lg mb-5 border border-slate-300/40 p-6" />
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