<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Faker\Factory as Faker;

class SubmitAnswerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    
    // Test That if Not Submit Right Parameters api fails
    public function testPostFail()
    {
        
        
        $response = $this->post('/api/addAnswer');
        
        $response->assertJson(['status'=>'failed']);

        $response->assertStatus(400);
    }
    
    // Test That I can Submit Answers
    
    public function testPostSuccess()
    {
        
        $faker =  Faker::create(); 
        $parameters = [
            
                         'Question_1'=>$faker->numberBetween($min = 1, $max = 7),
            
                         'Question_2'=>$faker->numberBetween($min = 1, $max = 7),
            
                         'Question_3'=>$faker->numberBetween($min = 1, $max = 7),
            
                         'Question_4'=>$faker->numberBetween($min = 1, $max = 7),
            
                         'Question_5'=>$faker->numberBetween($min = 1, $max = 7),
            
                         'Question_6'=>$faker->numberBetween($min = 1, $max = 7),
            
                         'Question_7'=>$faker->numberBetween($min = 1, $max = 7),
            
                         'Question_8'=>$faker->numberBetween($min = 1, $max = 7),
            
                         'Question_9'=>$faker->numberBetween($min = 1, $max = 7),
            
                         'Question_10'=>$faker->numberBetween($min = 1, $max = 7),
            
                         'email'=>$faker->unique()->email
                      ];
            
        $response = $this->post('/api/addAnswer',$parameters);
        
        $response->assertStatus(200);
    }
}
