<?php

namespace App\Http\Controllers;

use App\Models\DetailPeminjaman;
use App\Models\Peminjaman;
use Illuminate\Http\Request;

class PeminjamanController extends Controller
{
    public function index()
    {
        if (Peminjaman::where('user_id', auth()->user()->id)->where('status', null)->exists()) {
            $peminjaman = Peminjaman::where('user_id', auth()->user()->id)->where('status', null)->first();
            $peminjaman->update([
                'tanggal_pinjam' => now(),
            ]);
            $buku = DetailPeminjaman::where('peminjaman_id', $peminjaman->id)->with('buku')->get();
            return inertia(
                'Peminjaman/Index',
                ['peminjaman' => $peminjaman, 'buku' => $buku]

            );
        } else {
            return redirect()->route('buku.index');
        }
    }

    public function remove(DetailPeminjaman $detailPeminjaman)
    {
        $detailPeminjaman->delete();

        return redirect()->back();
    }

    public function diproses(Peminjaman $peminjaman)
    {
        $peminjaman->update([
            'tanggal_wajib_kembali' => now()->addDays(14),
            'status' => 'diproses',
        ]);

        return redirect()->route('peminjaman.list');
    }

    public function list()
    {
        if (!auth()->user()->is_admin) {
            $peminjaman = Peminjaman::where('user_id', auth()->user()->id)->where('status', '!=', null)->get();
        } else {
            $peminjaman = Peminjaman::where('status', '!=', null)->get();
        }

        return inertia(
            'Peminjaman/List',
            ['peminjaman' => $peminjaman]
        );
    }

    public function detail(Peminjaman $peminjaman)
    {
        $buku = DetailPeminjaman::where('peminjaman_id', $peminjaman->id)->with('buku')->get();
        $peminjaman->load('user');
        $peminjaman->load('admin');



        return inertia(
            'Peminjaman/Detail',
            ['peminjaman' => $peminjaman, 'buku' => $buku]
        );
    }

    public function update(Request $request, Peminjaman $peminjaman)
    {
        $peminjaman->update([
            'admin_id' => auth()->user()->id,
            'tanggal_ambil' => $request->tanggal_ambil,
            'tanggal_kembali' => $request->tanggal_kembali,
            'status' => $request->status,
        ]);


        return redirect()->route('peminjaman.list');
    }
}
