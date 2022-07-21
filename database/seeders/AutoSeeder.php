<?php

namespace Database\Seeders;

use App\Models\Auto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AutoSeeder extends Seeder
{
    protected $models = [
        'Lanos',
        'Nexia',
        'Sens',
        'ZAZ Forza',
        'Matiz',
        'Gentra',
        'Nubira',
        'Aveo',
        'Epica',
        'ZAZ Vida',
        'Tacuma',
        'Lacetti',
        'Evanda',
        'Captiva',
        'Cruze',
        'Cobalt',
        'Spark',
        'Nexia R3'
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->models as $model) {
            $auto = new Auto();
            $auto->model = $model;
            $auto->save();
            unset($auto);
        }
    }
}
