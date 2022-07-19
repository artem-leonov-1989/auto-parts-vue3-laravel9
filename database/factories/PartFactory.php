<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Part>
 */
class PartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->hexColor,
            'description' => fake()->realText('100'),
            'manufacturer_code' => \Str::random(),
            'manufacturer'=> fake()->company,
            'price' => fake()->randomFloat(2, 0, 9999),
            'category_id' => random_int(1, 5)
        ];
    }
}
