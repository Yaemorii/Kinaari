<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('beranda');
});

Route::get('/profil', function () {
    return view('profil');
});

Route::get('/typelumbung', function () {
    return view('typelumbung');
});

Route::get('/typewaleminahasa', function () {
    return view('typewaleminahasa');
});

Route::get('/produk', function () {
    return view('produk');
});

Route::get('/post-artikel', function () {
    return view('post-artikel');
});

Route::get('/budaya', function () {
    return view('budaya');
});

Route::get('/pesona', function () {
    return view('pesona');
});

Route::get('/aktivitas', function () {
    return view('aktivitas');
});

Route::get('/post-portofolio', function () {
    return view('post-portofolio');
});

Route::get('/jelajah', function () {
    return view('jelajah');
});

Route::get('/pengalaman', function () {
    return view('pengalaman');
});

Route::get('/pilihan', function () {
    return view('pilihan');
});

Route::get('/kontak', function () {
    return view('kontak');
});