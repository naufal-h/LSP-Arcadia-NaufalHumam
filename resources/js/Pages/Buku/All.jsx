import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Add } from "@mui/icons-material";
import {
    Card,
    CardActions,
    CardContent,
    IconButton,
    Typography,
} from "@mui/material";

export default function Dashboard({ auth, buku }) {
    const { put } = useForm();

    function submit(id) {
        put(route("buku.add", id));
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Daftar Buku
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {buku.map((buku) => (
                                    <Card variant="outlined" key={buku.id}>
                                        <CardContent>
                                            <Typography
                                                sx={{ fontSize: 14 }}
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                {buku.penulis}
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                component="div"
                                            >
                                                {buku.judul}
                                            </Typography>
                                            <Typography
                                                sx={{ mb: 1.5 }}
                                                color="text.secondary"
                                            >
                                                {new Date(
                                                    buku.tanggal_terbit
                                                ).toLocaleDateString()}
                                            </Typography>
                                            <Typography variant="body2">
                                                {buku.penerbit}
                                            </Typography>
                                        </CardContent>
                                        <CardActions
                                            sx={{ justifyContent: "flex-end" }}
                                        >
                                            <IconButton
                                                aria-label="add"
                                                color="primary"
                                                onClick={() => submit(buku.id)}
                                            >
                                                <Add />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
