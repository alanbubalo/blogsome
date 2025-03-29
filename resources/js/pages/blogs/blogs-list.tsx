import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Fragment } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Blogs',
        href: '/blogs',
    }
];

type Blog = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    is_edited: boolean;
};

export default function BlogsList({ blogs }: { blogs: Blog[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blogs" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] overflow-y-auto rounded-xl border md:min-h-min">
                    {blogs.map((blog) => (
                        <Fragment key={blog.id}>
                            <div className="flex items-center justify-between gap-8 border-b border-b-gray-200 p-4 dark:border-b-gray-700">
                                <div className="flex gap-4">
                                    <PlaceholderPattern className="h-15 w-16 rounded-lg border stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                                    <div className="flex basis-full flex-col">
                                        <div className="flex items-center gap-2">
                                            <Link href={`/blogs/${blog.id}`} className="inline-block w-fit hover:underline">
                                                <h2 className="text-lg font-semibold leading-none pb-1">{blog.title}</h2>
                                            </Link>
                                            <span className="text-xs text-gray-500">{blog.is_edited ? "(Edited)" : ""}</span>
                                        </div>

                                        <p className="text-sm text-gray-500">{new Date(blog.created_at).toDateString()}</p>
                                        <p className="overflow-hidden text-sm text-ellipsis text-gray-500">{blog.description}</p>
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
