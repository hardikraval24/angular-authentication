<?php

use Illuminate\Database\Seeder;

class EventTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i <10 ; $i++)
        { 
            DB::table('events')->insert([
                'name' => 'Kite Festival ' . $i,
                'description' => 'Dummy Text ' .$i,
                'event_date' => '2018-06-30',
                'created_at' => '2018-06-30',
                'updated_at' => '2018-06-30'
            ]);
        }
        
    }
}
