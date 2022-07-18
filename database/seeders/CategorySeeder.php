<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    protected array $categoryList = [
        'Двигун',
        'Ходова частина',
        'КПП запчастини',
        'Електрика',
        'Кузов та салон',
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->categoryList as $value) {
            $category = new Category();
            $category->name = $value;
            $category->save();
        }
    }
}
