import Link from 'next/link'

interface Course {
  slug: string;
  name: string;
  duration: string;
  tools: string[];
  languages: string[];
  description: string;
}

interface CourseListProps {
  courses: Course[];
}

export default function CourseList(props: CourseListProps) {
  const getImageExtension = (slug: string) => {
    // Add the slugs that should use .png here
    const pngSlugs = ['customizing-evm', 'l1-tokenomics', 'avacloudapis'];
    return pngSlugs.includes(slug) ? 'png' : 'gif';
  };

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-7 sm:mt-12 sm:pt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {props.courses.map((course) => (
        <Link href={`/course/${course.slug}`} key={course.slug} className="flex max-w-xl flex-col items-start space-y-2">
          <img 
            src={`/course-banner/${course.slug}.${getImageExtension(course.slug)}`} 
            alt={`${course.name} banner`}
            className="w-full aspect-[3/2] object-contain border-slate-200 rounded-lg mb-5 bg-white" 
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
  );
}

