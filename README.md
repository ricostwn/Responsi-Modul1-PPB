# Responsi-Modul1-PPB
Baik, berikut adalah draf lengkap untuk file **`README.md`** proyek REST API Layanan Reparasi Handphone Anda. Pastikan Anda mengganti *placeholder* seperti `<ID_TRANSAKSI_CONTOH>` dan `<LINK_REPO_ANDA>` dengan nilai yang sebenarnya.

-----

# REST API Layanan Reparasi Handphone

## Deskripsi Umum

Proyek ini adalah implementasi REST API sederhana menggunakan **Node.js** dan **Express.js** untuk mengelola data transaksi reparasi handphone. API ini dibangun sebagai tugas responsi untuk modul Pembuatan API dengan JavaScript. Data transaksi disimpan secara persisten di **Supabase**, dan keseluruhan aplikasi di-deploy sebagai *serverless function* di **Vercel**.

Tujuan utama proyek ini adalah menyediakan sistem digital yang mempermudah proses pencatatan, pemantauan status, dan penghapusan riwayat reparasi.

## Tujuan dan Fitur Utama

1.  Mengimplementasikan konsep **CRUD** (Create, Read, Update, Delete) dalam arsitektur RESTful API.
2.  Meningkatkan pemahaman penggunaan Express.js sebagai *framework* backend.
3.  Mengelola data menggunakan database **Supabase (PostgreSQL)**.
4.  Mendukung fitur *filter* data berdasarkan status pekerjaan.

| Metode | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| `GET` | `/api/repairs` | Menampilkan seluruh daftar transaksi reparasi. Mendukung *filter* status: `/api/repairs?status=Selesai` |
| `GET` | `/api/repairs/:id`| Menampilkan detail transaksi berdasarkan ID. |
| `POST` | `/api/repairs` | Menambahkan transaksi reparasi baru ke dalam daftar. |
| `PUT` | `/api/repairs/:id` | Memperbarui status, harga, atau tanggal selesai pekerjaan. |
| `DELETE` | `/api/repairs/:id`| Menghapus data transaksi yang sudah selesai atau dibatalkan. |

-----

## Struktur Data

Tabel: `repairs` (di Supabase)

| Kolom | Tipe | Keterangan |
| :--- | :--- | :--- |
| `id` | UUID | Primary Key, ID unik transaksi. |
| `device` | TEXT | Merek dan Tipe HP (cth: Samsung A51). |
| `customer_name`| TEXT | Nama Pelanggan. |
| `issue` | TEXT | Deskripsi masalah (cth: Layar pecah). |
| `status` | TEXT | Status pekerjaan (`Diterima`, `Dalam Proses`, `Menunggu Sparepart`, `Selesai`). **Default:** `Diterima`. |
| `price` | NUMERIC(10, 2) | Biaya total reparasi. **Default:** 0.00 |
| `date_received` | DATE | Tanggal HP diterima. |
| `date_finished` | DATE | Tanggal HP selesai direparasi (Boleh NULL). |

-----

## Contoh Request dan Response

### 1\. POST /api/repairs (Menambah Data Baru)

**Body Request (JSON):**

```json
{
  "device": "iPhone 11",
  "customer_name": "Nathanael Setiawan",
  "issue": "Baterai tidak mengisi",
  "date_received": "2025-10-28" 
}
```

**Response (201 Created):**

```json
{
  "message": "Transaksi reparasi berhasil ditambahkan.",
  "data": {
    "id": "c1f72a4d-...",
    "device": "iPhone 11",
    "customer_name": "Nathanael Setiawan",
    "issue": "Baterai tidak mengisi",
    "status": "Diterima",
    "price": 0.00,
    "date_received": "2025-10-28",
    "date_finished": null
  }
}
```

### 2\. PUT /api/repairs/:id (Memperbarui Status dan Harga)

**URL:** `/api/repairs/c1f72a4d-...` (Ganti dengan ID Transaksi)

**Body Request (JSON):**

```json
{
  "status": "Selesai",
  "price": 450000.00,
  "date_finished": "2025-10-30"
}
```

**Response (200 OK):**

```json
{
  "message": "Data reparasi berhasil diperbarui.",
  "data": {
    "id": "c1f72a4d-...",
    "device": "iPhone 11",
    "customer_name": "Nathanael Setiawan",
    "issue": "Baterai tidak mengisi",
    "status": "Selesai",
    "price": 450000.00,
    "date_received": "2025-10-28",
    "date_finished": "2025-10-30"
  }
}
```

### 3\. GET /api/repairs?status=Selesai (Filter Status)

**Response (200 OK):**

```json
[
  {
    "id": "c1f72a4d-...",
    "device": "iPhone 11",
    "customer_name": "Nathanael Setiawan",
    "issue": "Baterai tidak mengisi",
    "status": "Selesai",
    "price": 450000.00,
    "date_received": "2025-10-28",
    "date_finished": "2025-10-30"
  }
]
```

-----

## Langkah Instalasi dan Cara Menjalankan API

### Prasyarat

  * Node.js (v18+) dan npm terinstal.
  * Akun Supabase dengan tabel `repairs` yang sudah dibuat.

### Instalasi Lokal

1.  **Clone Repositori:**

    ```bash
    git clone <Link Repo Anda>
    cd <nama_folder_proyek>
    ```

2.  **Instal Dependensi:**

    ```bash
    npm install
    ```

    *(Memasang express, dotenv, @supabase/supabase-js, dan nodemon)*

3.  **Konfigurasi Environment:**
    Buat file bernama **`.env`** di *root* proyek dan isi dengan kredensial Anda dari Supabase:

    ```
    SUPABASE_URL=<Project URL Supabase Anda>
    SUPABASE_KEY=<Anon Public Key Supabase Anda>
    PORT=3000
    ```

4.  **Jalankan Server (Development Mode):**

    ```bash
    npm run dev
    ```

    Aplikasi akan berjalan di `http://localhost:3000`. Gunakan Postman untuk menguji *endpoint* di `http://localhost:3000/api/repairs`.

-----

## Output yang Wajib Diupload

**🌐 Link Deploy (Vercel):** *[Tambahkan URL Vercel Anda di sini]*

**📦 Link GitHub Repository:** *[Tambahkan Link Repo GitHub Anda di sini]*