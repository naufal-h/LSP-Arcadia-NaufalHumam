<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('peminjamen', function (Blueprint $table) {
            $table->id();
            $table->dateTime('tanggal_pinjam');
            $table->dateTime('tanggal_ambil')->nullable();
            $table->dateTime('tanggal_wajib_kembali')->nullable();
            $table->dateTime('tanggal_kembali')->nullable();
            $table->enum('status', ['diproses', 'disetujui', 'ditolak', 'selesai'])->nullable();
            $table->timestamps();
            $table->unsignedBigInteger('user_id')->index();
            $table->unsignedBigInteger('admin_id')->index()->nullable();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('admin_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peminjamen');
    }
};
