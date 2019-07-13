<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePerspectiveTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('perspective', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->smallInteger('Question_1');
            $table->smallInteger('Question_2');
            $table->smallInteger('Question_3');
            $table->smallInteger('Question_4');
            $table->smallInteger('Question_5');
            $table->smallInteger('Question_6');
            $table->smallInteger('Question_7');
            $table->smallInteger('Question_8');
            $table->smallInteger('Question_9');
            $table->smallInteger('Question_10');
            $table->string('MBTI',4);
            $table->string('email',100);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('perspective');
    }
}
