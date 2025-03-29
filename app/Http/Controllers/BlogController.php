<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function show(): Response
    {
        $blogs = Blog::query()
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('blogs/blogs-list', [
            'blogs' => $blogs,
        ]);
    }
}
