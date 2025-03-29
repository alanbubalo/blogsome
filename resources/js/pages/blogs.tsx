import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import type { BreadcrumbItem } from '@/types';
import { Fragment } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blogs',
        href: '/blogs',
    },
];

type Blog = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    is_edited: boolean;
}

export default function Blogs({ blogs }: { blogs: Blog[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blogs" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="overflow-y-auto border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] rounded-xl border md:min-h-min">
                    {blogs.map((blog) => (
                        <Fragment key={blog.id}>
                            <div className="flex items-center justify-between border-b gap-8 border-b-gray-200 p-4 dark:border-b-gray-700">
                                <div className="flex items-center gap-4">
                                    <PlaceholderPattern className="h-12 w-12 rounded-lg stroke-neutral-900/20 dark:stroke-neutral-100/20 border" />
                                    <div className="flex flex-col basis-full">
                                        <div className="flex items-center gap-2">
                                            <Link href={`/blogs/${blog.id}`} className="inline-block hover:underline w-fit">
                                                <h2 className="text-lg font-semibold">{blog.title}</h2>
                                            </Link>
                                            <span className="text-xs text-gray-500">{blog.is_edited && "(Edited)"}</span>
                                        </div>

                                        <p className="text-sm text-gray-500">{new Date(blog.created_at).toDateString()}</p>
                                        <p className="text-sm text-gray-500 overflow-hidden text-ellipsis">{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
