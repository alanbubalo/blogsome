<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    public function show(): Response
    {
        $blogs = Blog::query()->get()->map(function (Blog $blog) {
            $blog->is_edited = $blog->isEdited();
            return $blog;
        });

        return Inertia::render('blogs', [
            'blogs' => $blogs,
        ]);
    }
}
