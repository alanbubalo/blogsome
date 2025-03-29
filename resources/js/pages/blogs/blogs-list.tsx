import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Fragment } from 'react';
import { Badge } from '@/components/ui/badge';

const breadcrumbs: BreadcrumbItem[] = [
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
    category: string;
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
                           <BlogCard blog={blog} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}

const BlogCard = ({ blog }: { blog: Blog }) => (
    <div className="flex items-center justify-between gap-8 border-b border-b-neutral-200 p-4 dark:border-b-neutral-700">
        <div className="flex gap-4">
            <PlaceholderPattern className="flex-none h-23 w-24 rounded-lg border stroke-neutral-900/20 dark:stroke-neutral-100/20" />
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <Link href={`/blogs/${blog.id}`} className="inline-block w-fit hover:underline">
                        <h2 className="text-lg font-semibold leading-none pb-1">{blog.title}</h2>
                    </Link>
                    <span className="text-xs"></span>
                </div>

                <div className="flex items-center gap-2 py-1">
                    <Badge variant="outline">{blog.category}</Badge>
                </div>

                <p className="text-sm flex gap-2 items-center text-neutral-600  dark:text-neutral-300">
                    <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                    <span className="text-xs">{blog.is_edited ? "(Edited)" : ""}</span>
                </p>
                <p className="overflow-hidden text-sm text-ellipsis text-neutral-600  dark:text-neutral-300">{blog.description}</p>
            </div>
        </div>
    </div>
);
