<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers_leads', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('customer_id');
            $table->unsignedInteger('employee_id');
            $table->unsignedInteger('lead_outcome_code_id');
            $table->unsignedInteger('lead_status_code_id');
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('employee_id')->references('id')->on('employees');
            $table->foreign('lead_outcome_code_id')->references('id')->on('lead_outcome_codes');
            $table->foreign('lead_status_code_id')->references('id')->on('lead_status_codes');
            $table->integer('customer_contact_yn')->default(0);
            $table->string('date_of_lead');
            $table->string('description');

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
        Schema::dropIfExists('customers_leads');
    }
}
