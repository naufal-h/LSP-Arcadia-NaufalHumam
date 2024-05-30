<?php

use App\Http\Controllers\BukuController;
use App\Http\Controllers\PeminjamanController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/buku', [BukuController::class, 'index'])->name('buku.index');
    Route::put('/buku/{buku}', [BukuController::class, 'add'])->name('buku.add');

    Route::get('/peminjaman', [PeminjamanController::class, 'index'])->name('peminjaman.index');
    Route::put('/peminjaman/{peminjaman}', [PeminjamanController::class, 'diproses'])->name('peminjaman.diproses');

    Route::get('/peminjaman/{peminjaman}', [PeminjamanController::class, 'detail'])->name('peminjaman.detail');
    Route::patch('/peminjaman/{peminjaman}/update', [PeminjamanController::class, 'update'])->name('peminjaman.update');

    Route::delete('/peminjaman/{detail_peminjaman}', [PeminjamanController::class, 'remove'])->name('peminjaman.remove');

    Route::get('/list-peminjaman', [PeminjamanController::class, 'list'])->name('peminjaman.list');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
