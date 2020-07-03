<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Clients;
use Faker\Generator as Faker;

$factory->define(Clients::class, function (Faker $faker) {

    return [
        'name' => $faker->text,
        'email' => $faker->text,
        'phone' => $faker->randomDigitNotNull,
        'created_at' => $faker->date('Y-m-d H:i:s'),
        'updated_at' => $faker->date('Y-m-d H:i:s')
    ];
});
