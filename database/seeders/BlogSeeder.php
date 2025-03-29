<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Blog::factory(15)->create();

        Blog::query()->inRandomOrder()->limit(5)->update([
            'is_edited' => true,
        ]);
    }
}
