<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Part>
 */
class PartFactory extends Factory
{
    protected array $firms = [
        'GM',
        'HNH (Korea)',
        'SHIN KUM',
        'JC (Poland)',
        'JPN (Poland)',
        'OEM'
        ];
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
            'manufacturer_code' => random_int(90000000, 99999999),
            'manufacturer'=> fake()->randomElement($this->firms),
            'price' => fake()->randomFloat(2, 0, 9999),
            'stock_balance' => random_int(1, 10),
            'category_id' => random_int(1, 5),
        ];
    }
}
