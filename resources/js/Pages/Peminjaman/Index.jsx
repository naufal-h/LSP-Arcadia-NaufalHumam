import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Delete } from "@mui/icons-material";
import {
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

export default function Dashboard({ auth, peminjaman, buku }) {
    const { delete: destroy, put } = useForm();

    function hapus(id) {
        destroy(route("peminjaman.remove", id));
    }

    function submit(id) {
        put(route("peminjaman.diproses", id));
    }

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
                            <form onSubmit={submit} className="mt-6 space-y-6">
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
                                        htmlFor="buku"
                                        value="Daftar Buku"
                                    />
                                    {buku.map((buku) => (
                                        <List>
                                            <ListItem
                                                className="border border-gray-200 rounded-md overflow-hidden mt-1"
                                                secondaryAction={
                                                    <IconButton
                                                        edge="end"
                                                        aria-label="delete"
                                                        onClick={() =>
                                                            hapus(buku.id)
                                                        }
                                                    >
                                                        <Delete />
                                                    </IconButton>
                                                }
                                            >
                                                <ListItemText
                                                    primary={buku.buku.judul}
                                                />
                                            </ListItem>
                                        </List>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        href={route("buku.index")}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => submit(peminjaman.id)}
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
}
