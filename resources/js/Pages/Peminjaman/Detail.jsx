import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput.jsx";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Button, List, ListItem, ListItemText } from "@mui/material";

export default function Dashboard({ auth, peminjaman, buku }) {
    if (auth.user.is_admin) {
        const { data, setData, patch, errors } = useForm({
            tanggal_ambil: peminjaman.tanggal_ambil,
            tanggal_kembali: peminjaman.tanggal_kembali,
            status: peminjaman.status,
        });

        const submit = (e) => {
            e.preventDefault();

            patch(route("peminjaman.update", peminjaman.id));
        };
        return (
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Peminjaman #{peminjaman.id}
                    </h2>
                }
            >
                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <form
                                    onSubmit={submit}
                                    className="mt-6 space-y-6"
                                >
                                    <div>
                                        <InputLabel
                                            htmlFor="nama"
                                            value="Nama Peminjam"
                                        />

                                        <TextInput
                                            id="size"
                                            className="mt-1 block w-full"
                                            value={peminjaman.user.nama}
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="nama_admin"
                                            value="Nama Admin"
                                        />

                                        <TextInput
                                            id="size"
                                            className="mt-1 block w-full"
                                            value={auth.user.nama}
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="tanggal_pinjam"
                                            value="Tanggal Peminjaman"
                                        />

                                        <TextInput
                                            id="tanggal_pinjam"
                                            className="mt-1 block w-full"
                                            value={new Date(
                                                peminjaman.tanggal_pinjam
                                            ).toLocaleString()}
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="tanggal_ambil"
                                            value="Tanggal Pengambilan"
                                        />

                                        <TextInput
                                            id="tanggal_ambil"
                                            className="mt-1 block w-full"
                                            type="datetime-local"
                                            value={data.tanggal_ambil}
                                            onChange={(e) =>
                                                setData(
                                                    "tanggal_ambil",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="tanggal_wajib_kembali"
                                            value="Tanggal Wajib Kembali"
                                        />

                                        <TextInput
                                            id="tanggal_wajib_kembali"
                                            className="mt-1 block w-full"
                                            value={new Date(
                                                new Date(
                                                    peminjaman.tanggal_pinjam
                                                ).setDate(
                                                    new Date(
                                                        peminjaman.tanggal_pinjam
                                                    ).getDate() + 14
                                                )
                                            ).toLocaleString()}
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="tanggal_kembali"
                                            value="Tanggal Pengembalian"
                                        />

                                        <TextInput
                                            id="tanggal_kembali"
                                            className="mt-1 block w-full"
                                            type="datetime-local"
                                            value={data.tanggal_kembali}
                                            onChange={(e) =>
                                                setData(
                                                    "tanggal_kembali",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="status"
                                            value="Status Peminjaman"
                                        />

                                        <SelectInput
                                            id="status"
                                            className="mt-1 block w-full"
                                            options={[
                                                "diproses",
                                                "disetujui",
                                                "ditolak",
                                                "selesai",
                                            ]}
                                            value={data.status}
                                            onChange={(e) =>
                                                setData(
                                                    "status",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="buku"
                                            value="Daftar Buku"
                                        />
                                        {buku.map((buku) => (
                                            <List>
                                                <ListItem className="border border-gray-200 rounded-md overflow-hidden mt-1">
                                                    <ListItemText
                                                        primary={
                                                            buku.buku.judul
                                                        }
                                                    />
                                                </ListItem>
                                            </List>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Button
                                            variant="outlined"
                                            color="error"
                                            href={route("peminjaman.list")}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    } else {
        return (
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Peminjaman #{peminjaman.id}
                    </h2>
                }
            >
                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <div className="mt-6 space-y-6">
                                    <div>
                                        <InputLabel
                                            htmlFor="nama"
                                            value="Nama Peminjam"
                                        />

                                        <TextInput
                                            id="size"
                                            className="mt-1 block w-full"
                                            value={auth.user.nama}
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="nama_admin"
                                            value="Nama Admin"
                                        />

                                        <TextInput
                                            id="size"
                                            className="mt-1 block w-full"
                                            // if peminjaman.admin is null, return empty string
                                            value={
                                                peminjaman.admin != null
                                                    ? peminjaman.admin.nama
                                                    : ""
                                            }
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="tanggal_pinjam"
                                            value="Tanggal Peminjaman"
                                        />

                                        <TextInput
                                            id="tanggal_pinjam"
                                            className="mt-1 block w-full"
                                            value={new Date(
                                                peminjaman.tanggal_pinjam
                                            ).toLocaleString()}
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="tanggal_ambil"
                                            value="Tanggal Pengambilan"
                                        />

                                        <TextInput
                                            id="tanggal_ambil"
                                            className="mt-1 block w-full"
                                            value={
                                                peminjaman.tanggal_ambil
                                                    ? new Date(
                                                          peminjaman.tanggal_ambil
                                                      ).toLocaleString()
                                                    : ""
                                            }
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="tanggal_wajib_kembali"
                                            value="Tanggal Wajib Kembali"
                                        />

                                        <TextInput
                                            id="tanggal_wajib_kembali"
                                            className="mt-1 block w-full"
                                            value={new Date(
                                                new Date(
                                                    peminjaman.tanggal_pinjam
                                                ).setDate(
                                                    new Date(
                                                        peminjaman.tanggal_pinjam
                                                    ).getDate() + 14
                                                )
                                            ).toLocaleString()}
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="tanggal_kembali"
                                            value="Tanggal Pengembalian"
                                        />

                                        <TextInput
                                            id="tanggal_kembali"
                                            className="mt-1 block w-full"
                                            value={
                                                peminjaman.tanggal_kembali
                                                    ? new Date(
                                                          peminjaman.tanggal_kembali
                                                      ).toLocaleString()
                                                    : ""
                                            }
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="status"
                                            value="Status Peminjaman"
                                        />

                                        <TextInput
                                            id="status"
                                            className="mt-1 block w-full"
                                            value={peminjaman.status}
                                            disabled
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="buku"
                                            value="Daftar Buku"
                                        />
                                        {buku.map((buku) => (
                                            <List>
                                                <ListItem className="border border-gray-200 rounded-md overflow-hidden mt-1">
                                                    <ListItemText
                                                        primary={
                                                            buku.buku.judul
                                                        }
                                                    />
                                                </ListItem>
                                            </List>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }
}
