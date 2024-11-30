import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { getGuidePage, getGuidePages } from '@/utils/guide-loader';
import { createMetadata } from '@/utils/metadata';
import { buttonVariants } from '@/components/ui/button';
import { ArrowUpRightIcon, MessagesSquare } from 'lucide-react';
import { SiX } from '@icons-pack/react-simple-icons';
import { Callout } from 'fumadocs-ui/components/callout';
import Comments from '@/components/comments';

interface Param {
    slug: string;
}

export const dynamicParams = false;

export default function Page({
    params,
}: {
    params: Param;
}): React.ReactElement {
    const page = getGuidePage([params.slug]);

    if (!page) notFound();

    const path = `content/guide/${page.file.path}`;

    return (
        <>
            <div
                className="container mt-5 py-12 md:px-8"
                style={{
                    backgroundColor: 'transparent',
                    backgroundImage: 'url(/images/shuwa-light.svg)',
                    backgroundSize: 'contain'
                }}
            >
                <h1 className="mb-2 text-3xl font-bold">
                    {page.data.title}
                </h1>
                <p className="mb-4">{page.data.description}</p>
                <Link
                    href="/guide"
                    className={buttonVariants({ size: 'sm', variant: 'secondary' })}
                >
                    Back
                </Link>
            </div>
            <article className="container grid grid-cols-1 px-0 py-8 lg:grid-cols-[2fr_1fr] lg:px-4">
                <div className="prose p-4">
                    {page.data.exports.toc.length > 0 ? <InlineTOC items={page.data.exports.toc} /> : null} 
                    <page.data.exports.default />
                    {page.data.comments && (
                        <Callout title="" icon={<MessagesSquare stroke="#02d473"/>}><Comments/></Callout>
                    )}
                </div>
                <div className="flex flex-col gap-4 border-l p-4 text-sm">
                    <div>
                        <p className="mb-1 text-muted-foreground">Written by</p>
                        <div className="col-span-2 flex flex-col gap-2">
                            {page.data.authors.map(author => (
                                    <span className="flex-grow truncate">{author}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-1 text-sm text-muted-foreground">On</p>
                        <p className="font-medium">
                            {new Date(page.data.date ?? page.file.name).toDateString()}
                        </p>
                    </div>

                    <div>
                        <p className="mb-2 text-muted-foreground">Topics</p>
                        <div className="flex flex-wrap items-center gap-4 text-xs">
                            {page.data.topics.map(item => (
                                <span key={item}
                                    className="relative z-10 rounded-full bg-accent px-3 py-1.5 font-medium text-muted-foreground"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <a
                        href={`https://github.com/Dijets-Inc/dijets-academy/blob/dev/${path}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                    >
                        <ArrowUpRightIcon className="size-5" /> Edit on Github 
                    </a>

                    {/*<Control url={page.url} />*/}
                </div>
            </article>
        </>
    );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
  const page = getGuidePage([params.slug]);

  if (!page) notFound();

  const description =
    page.data.description ?? 'Learn how to build on Dijets blockchain with Academy';

  const imageParams = new URLSearchParams();
  imageParams.set('title', page.data.title);
  imageParams.set('description', description);

  const image = {
    alt: 'Banner',
    url: `/api/og/guide/${params.slug[0]}?${imageParams.toString()}`,
    width: 1200,
    height: 630,
  };

  return createMetadata({
    title: page.data.title,
    description,
    openGraph: {
      url: `/docs/${page.slugs.join('/')}`,
      images: image,
    },
    twitter: {
      images: image,
    },
  });
}


export function generateStaticParams(): Param[] {
    return getGuidePages().map<Param>((page) => ({
        slug: page.slugs[0],
    }));
}