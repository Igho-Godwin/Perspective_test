<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

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

        $response->assertStatus(200);
    }
    
    // Test That I can Submit Answers
    
    public function testPostSuccess()
    {
        
        
        $response = $this->post('/api/addAnswer',['Question_1'=>1,'Question_2'=>2,'Question_3'=>3,'Question_4'=>4,'Question_5'=>5,'Question_6'=>6,'Question_7'=>7,'Question_8'=>1,'Question_9'=>2,'Question_10'=>1,'email'=>'xx@gmail.com']);
        

        $response->assertStatus(200);
    }
}
