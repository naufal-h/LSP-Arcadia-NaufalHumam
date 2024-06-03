<?php

namespace App\Http\Controllers;

use App\Models\Buku;
use App\Models\Peminjaman;

class BukuController extends Controller
{
    public function index()
    {
        $buku = Buku::all();

        return inertia(
            'Buku/All',
            ['buku' => $buku]
        );
    }

    public function add(Buku $buku)
    {
        if (Peminjaman::where('user_id', auth()->user()->id)->where('status', null)->count() == 0) {
            $peminjaman = Peminjaman::create([
                'user_id' => auth()->user()->id,
                'status' => null,
                'tanggal_pinjam' => now(),
            ]);


            $detail_peminjaman = $peminjaman->detail_peminjaman()->create([
                'buku_id' => $buku->id,
                'peminjaman_id' => $peminjaman->id,
            ]);
        } else {
            $peminjaman = Peminjaman::where('user_id', auth()->user()->id)->where('status', null)->first();

            $peminjaman->update([
                'tanggal_pinjam' => now(),
            ]);
            if ($peminjaman->detail_peminjaman()->where('buku_id', $buku->id)->count() == 0) {
                $detail_peminjaman = $peminjaman->detail_peminjaman()->create([
                    'buku_id' => $buku->id,
                    'peminjaman_id' => $peminjaman->id,
                ]);
            }
        }

        return redirect()->route('buku.index');
    }
}
