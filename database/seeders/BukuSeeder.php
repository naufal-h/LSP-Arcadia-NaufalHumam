<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BukuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            // insert data buku
            DB::table('bukus')->insert([
                'judul' => "Buku $i",
                'tanggal_terbit' => date('Y-m-d', strtotime("2024-05-01 + $i days")),
                'penulis' => "Pengarang $i",
                'penerbit' => "Penerbit $i",
            ]);
        }
    }
}
